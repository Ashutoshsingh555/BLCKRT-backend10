import { db } from '../../../models';
export default {
    async addInventoryPhoto(req, res, next) {
        try {
             let allatachment=[]
         for(let i=0; i<req.files.length; i++){
             await allatachment.push({
                 photoUrl:req.files[i].location,
                 name:req.files[i].originalname
                })
         }
         if(allatachment){
             for(let j=0; j<allatachment.length; j++){
                    db.inventoryImageModel.create({
                    photoUrl:allatachment[j].photoUrl,
                    name:allatachment[j].name
                 }) 
            }
              res.status(200).send({
                message:"Image upload successfully!!!",
               
            })
         }else{
             res.send("somthing went wrong")
         }
        }
        catch (err) {
            throw new RequestError('Error');
        }
         
    },
     // get single  by id
async getinventory(req, res) {
    try {
        const inventoryDetails = await  db.inventoryImageModel.findOne({ where: { id: req.params.id } });
        res.status(200).send({
            status: 200,
            message: 'Data fetched Successfully',
            data: inventoryDetails
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
    async getinventoryall(req, res){
      try {
        const ItemDetails = await  db.inventoryImageModel.findAll({order: [['createdAt', 'DESC']]})
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
    async updateinventory(req, res){
        try {
            const updateinventory =await  db.inventoryImageModel.update({
                name:req.body.name,
                description:req.body.description

        },
        {where: {id: req.params.id} });
        return res.status(201).send({
            status: 200,
            message: 'Data update Successfully',
            inventory: updateinventory,
            
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
    async deleteinventory(req, res){
        try {
              const imgid = req.query.id
              console.log(imgid)
              console.log(req.body)
             await  db.inventoryImageModel.destroy({
            where: {id:imgid}
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