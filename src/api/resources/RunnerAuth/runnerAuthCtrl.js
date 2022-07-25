import crypto from "crypto"
import jwt from 'jsonwebtoken';
const accessTokenSecret = process.env.JWT_ACCESS_TOKEN_SECRET;
const refreshTokenSecret = process.env.JWT_REFRESH_TOKEN_SECRET;
import factorSmsService from "../../../2factorSmsService"
import { Sequelize } from "sequelize"
import { db } from '../../../models';

const Op = Sequelize.Op

//hash Otp function
async function hashOtp(data) {
    return crypto
        .createHmac('sha256', process.env.HASH_SECRET)
        .update(data)
        .digest('hex');

}

//otp generate function
async function generateOtp() {
    const otp = await crypto.randomInt(1000, 9999);
    return otp;
}
async function verifyOtp(hashedOtp, data) {
    let computedHash = await hashOtp(data);
    return computedHash === hashedOtp;
}

function generateTokens(payload) {
    const accessToken = jwt.sign(payload, accessTokenSecret, {
        expiresIn: '1h',
    });
    const refreshToken = jwt.sign(payload, refreshTokenSecret, {
        expiresIn: '1y',
    });
    return { accessToken, refreshToken };
}

async function storeRefreshToken(token, runnerId,) {
    try {
        await db.Runnertokenrefrash.create({
            runnerRefreshTokens: token,
            runnerId: runnerId
        })
   } catch (err) {
        console.log(err.message);
    }
}

async function verifyAccessToken(token) {
    return jwt.verify(token, accessTokenSecret);
}
async function findcustomer(filter) {
    const customer = await db.RunnerAuth.findOne(filter);
    return customer;
}

async function createcustomer(data) {
    const customer = await db.RunnerAuth.update(data);
    return customer;
}

export default {
  
//send api function
async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
        res.status(400).json({ message: 'Phone field is fromd!' });
    }

    const otp = await generateOtp();

    const ttl = 1000 * 60 * 2; // 2 min
    const expires = await Date.now() + ttl;
    const data = await `${phone}.${otp}.${expires}`;
    const hash = await hashOtp(data);

    try {
         await factorSmsService.sendBySms(phone, otp).then(data=>{
            return data
        })
      
        res.json({
            hash: `${hash}.${expires}`,
            phone,
            otp,
            
        });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'message sending failed' });
    }

},
//verify Otp Function
async verifyotp(req, res) {
    const phone = req.body.phone;
    const hash = req.body.hash;
    const otp = req.body.otp;
    if (!otp || !hash || !phone) {
        res.status(400).json({ message: 'All fields are fromd!' });
    }

    const [hashedOtp, expires] = await hash.split('.');
    if (Date.now() > +expires) {
        res.status(400).json({ message: 'OTP expired!' });
    }else{

    const data = `${phone}.${otp}.${expires}`;
    const isValid = await verifyOtp(hashedOtp, data);
    if (!isValid) {
        res.status(400).json({ message: 'Invalid OTP' });
    }

    let runner;
    let isFound = true;
    try {

        runner = await db.RunnerAuth.findOne({ where: { phone: phone } })
        if (!runner) {
            isFound = false;
            runner = await createcustomer({ phone });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Db error' });
    }

    const { accessToken, refreshToken } = generateTokens({
        id: runner.runnerId,
        activated: false,
    });

    await storeRefreshToken(refreshToken, runner.id);

    res.cookie('refreshToken', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    });

    res.cookie('accessToken', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
    });


    res.json({ message: "auth completed", auth: true, id: runner.id, name: runner.Name, phone: runner.phone, email: runner.email, status: runner.status, isFound: isFound });
    }
},
async logout(req, res) {
    const { accessToken } = req.query

    console.log(accessToken)
    await res.clearCookie('refreshToken')
        .clearCookie('accessToken')
        .json({ message: "logout success" })

},
//activate Otp Function
async activate(req, res, next) {
    try {
        const auth = true
        const updatetag = await db.RunnerAuth.update({
            Name: req.body.Name,
            avatar: req.file ? req.file.location : '',
            email: req.body.email,
            gender: req.body.gender,
            area: req.body.area,
            activated: auth

        },
            { where: { id: req.params.id } });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',


        });
    } catch (err) {
        res.send(err)
        console.log(err)
    }
},


async getAllcustomerList(req, res, next) {
    await db.RunnerAuth.findAll()
        .then(customer => {
            if (customer) {
                return res.status(200).json({ success: true, data: customer });
            }
            else
                res.status(500).json({ 'success': false });
        })
        .catch(err => {
            console.log(err)
            next(err);
        })
},

async  profilegetbyid(req, res, next) {
    await db.RunnerAuth.findOne({ where: { id: req.params.id } })
        .then(customer => {
            if (customer) {
                return res.status(200).json({ success: true, data: customer });
            }
            else
                res.status(500).json({ 'success': false });
        })
        .catch(err => {
            console.log(err)
            next(err);
        })
},

async deletecustomer(req, res, next) {
    try {
         await db.RunnerAuth.destroy({
            where: { id: req.query.id }
        });
        await res.status(200).send({
            message: "delete successfull"
        })
    }
    catch (error) {
        return res.status(400).send({
            message: 'Unable to update data',
            errors: error,
            status: 400
        });
    }
},
async createrunner(req, res, nest) {
    try {
        const { Name, phone, email, area, avatar, status, gender } = req.body

        db.RunnerAuth.create({
            Name: Name,
            avatar: req.file ? req.file.location : '',
            phone: phone,
            status: parseInt(status ? "active" : "inactive"),
            email: email,
            gender: gender,
            area: area,
            activated: "0"
        })
        return res.status(201).send({
            status: 200,
            message: 'register Successfully',
        });
} catch (err) {
        res.send(err)
    }
}
}