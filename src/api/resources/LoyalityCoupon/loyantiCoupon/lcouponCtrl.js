import { db } from '../../../../models';


export default {

    /* Add user api start here................................*/

    async addLoyaltyPointCouponModel(req, res, next) {
        console.log(req.body)
        try {
            const {loyaltyPoints,AmountsOff,couponCode,validFrome,status}= req.body;
            const couponDetails = await db.LoyaltyPointCouponModel.create({
               loyaltyPoints:loyaltyPoints,
               AmountsOff:AmountsOff,
               couponCode:couponCode,
               validFrome:validFrome,
               status:status

            });
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: couponDetails
            });
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to insert data',
                errors: error,
                status: 400
            });
        }
    },


   // get single  by id
async getcoupon(req, res) {
    try {
        const couponDetails = await db.LoyaltyPointCouponModel.findOne({ where: { id: req.params.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: couponDetails
        });
    }
    catch (error) {
        return res.status(400).send({
            message: 'Unable to fetch data',
            errors: error,
            status: 400
        });
    }
},
    async getcouponall(req, res){
          let limit = 10;
        let sort = ['createdAt', 'DESC'];
        let offset = 0;
        let page = 1;
        if(req.query.limit != undefined){
            limit = parseInt(req.query.limit);
        }
        if(req.query.page != undefined){
            page = req.query.page;
            if(page < 1)
                page = 1;
        }
        if(req.query.sort){
            if(req.query.sort == 'name'){
                sort = ['name'];
            }
        }
        try {
            // const ItemDetails = await productModel.findAll();
        const ItemDetails = await db.LoyaltyPointCouponModel.findAll({ order: [['createdAt', 'DESC']]})
            res.status(200).send({
                status: 200,
                message: 'Data fetched Successfully',
                data: ItemDetails
            });
        
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to fetch data',
                errors: error,
                status: 400
            });
        }
    },
    async updatecoupon(req, res){
        try {
            const {loyaltyPoints,AmountsOff ,id,couponCode,validFrome,status}= req.body;
            const updatecoupon =await db.LoyaltyPointCouponModel.update({
                loyaltyPoints:loyaltyPoints,
               AmountsOff:AmountsOff,
               couponCode:couponCode,
               validFrome:validFrome,
               status:status
        },
        {where: {id:id} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            coupon: updatecoupon,
            
        });
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to update data',
                errors: error,

                status: 400
            });
        }
    },
    async deletecoupon(req, res){
        try {
            const couponDetails =  await db.LoyaltyPointCouponModel.destroy({
            where: {id: req.query.id}
            });
            await res.status(200).send({
                message:"delete successfull",
                data:couponDetails
            })
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to update data',
                errors: error,
                status: 400
            });
        }
    }

}