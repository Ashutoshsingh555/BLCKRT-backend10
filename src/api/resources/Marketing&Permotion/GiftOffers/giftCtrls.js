import { db } from '../../../../models';


export default {

    /* Add user api start here................................*/

  
    async addGiftOffers(req, res, next) {
      try {
            const { offerType, offerName,categoryId, sortdsc,dsc,brand, qty,mrp, discount,totalPrice, status, photo  } = req.body;
            const details = await db.GiftOffers.create({
              offerType:offerType,
              offerName:offerName,
              categoryId:categoryId,
              sortdsc:sortdsc,
              dsc:dsc,
              brand:brand,
              qty:qty,
              mrp:mrp,
              discount:discount,
              totalPrice:totalPrice,
              status:status,
              photo :req.file ? req.file.location : '',

            })
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: details
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
     async updateOffers(req, res, next) {
      try {
            const { offerType,giftId, offerName,categoryId, sortdsc,dsc,brand, qty,mrp, discount,totalPrice, status, photo  } = req.body;
            const details = await db.GiftOffers.update({
              offerType:offerType,
              offerName:offerName,
              categoryId:categoryId,
              sortdsc:sortdsc,
              dsc:dsc,
              brand:brand,
              qty:qty,
              mrp:mrp,
              discount:discount,
              totalPrice:totalPrice,
              status:status,
              photo :req.file ? req.file.location : req.body.photo,

            },{where:{id:giftId}})
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: details
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
       async getallOffers(req, res) {
     
        try {
            const ItemDetails = await db.GiftOffers.findAll({
             include:[{model:db.category}]
            })
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
         async deleteOffers(req, res) {
         
        try {
            await db.GiftOffers.destroy({
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

}