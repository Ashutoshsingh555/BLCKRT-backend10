import { db } from '../../../models';


export default {

    /* Add user api start here................................*/

    async addadminContactUs(req, res, next) {
        console.log(req.body)
       
        try {
            const {  Query,message}= req.body;
            const adminContactUsDetails = await db.adminContactUs.create({
                Query:Query,
                message:message
            });
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: adminContactUsDetails
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
async getadminContactUs(req, res) {
    try {
        const adminContactUsDetails = await db.adminContactUs.findOne({ where: { id: req.query.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: adminContactUsDetails
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
    async getadminContactUsall(req, res){
        try {
        let limit = 100;
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
         
        const ItemDetails = await db.adminContactUs.findAll({ order: [['createdAt', 'DESC']]})
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
    async updateadminContactUs(req, res){
        try {
            const {  Query,message,adcId}= req.body;
            const updateadminContactUs =await db.adminContactUs.update({
                   Query:Query,
                   message:message
        },
        {where: {id: adcId} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            adminContactUs: updateadminContactUs,
            
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
    
   
    async deleteadminContactUs(req, res){
        try {
          await db.adminContactUs.destroy({
            where: {id: req.query.id}
            });
            await res.status(200).send({
                message:"delete successfull"
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