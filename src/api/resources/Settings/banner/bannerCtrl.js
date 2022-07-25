import { db } from '../../../../models';


export default {

    /* Add user api start here................................*/

  
    async addbannerSettingsphoto(req, res, next) {
      try {
            const { categoryId, imageCaption,bannerId, photo, status,  } = req.body;
            const bannerSettingsDetails = await db.bannerPhotosSettings.create({
                categoryId: categoryId,
                bannerId:bannerId,
                imageCaption: imageCaption,
                status: status,
                photoUrl: req.file ? req.file.location : '',

            })
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: bannerSettingsDetails
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
     async updatebannerSettingsphoto(req, res, next) {
      try {
            const { categoryId,id, imageCaption,bannerId, photo, status,  } = req.body;
            console.log(req.body)
            const bannerSettingsDetails = await db.bannerPhotosSettings.update({
                categoryId: categoryId,
                bannerId:bannerId,
                imageCaption: imageCaption,
                status: status,
                photoUrl: req.file ? req.file.location :photo,

            },{where:{id:id}})
            res.status(200).send({
                status: 200,
                message: 'Data update Successfully',
                data: bannerSettingsDetails
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


     async addbannerSettings (req, res, next) {
      try {
            const {  BannerType  } = req.body;
            console.log(BannerType)

            const bannerSettingsDetails = await db.bannerSettings.create({
              BannerType: BannerType,
            })
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: bannerSettingsDetails
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
    async getbannerSettings(req, res) {
        try {
            const bannerSettingsDetails = await db.bannerSettings.findOne({ where: { id: req.params.id },
            include: [{ model: db.bannerPhotosSettings,include:[{model:db.category}]}]});
            res.status(200).send({
                status: 200,
                message: 'Data fetched Successfully',
                data: bannerSettingsDetails
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
    async  getcategororybanner(req,res){
         try {
          
            const ItemDetails = await db.category.findAll({ order: [['createdAt', 'DESC']],
             include: [{ model: db.bannerPhotosSettings ,include: [{ model: db.bannerSettings}]}], })
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
     async  getcategororybannerbyid(req,res){
         try {
          
            const ItemDetails = await db.category.findAll({ 
            where:{id:req.query.id},
          
            include: [{ model: db.bannerPhotosSettings ,include: [{ model: db.bannerSettings}]}], })
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
    async getbannerSettingsall(req, res) {
     
        try {
            const ItemDetails = await db.bannerSettings.findAll({
             include: [{ model: db.bannerPhotosSettings,include:[{model:db.category}]}]
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
    async updatebannerSettings(req, res) {
        
        try {
            const { categoryId, BannerType, imageCaption,bannerid, photo, status,  } = req.body;
            const bannerSettingsDetails = await db.bannerSettings.update({
                categoryId: categoryId,
                BannerType: BannerType,
                imageCaption: imageCaption,
               status: status
             },{where:{id:bannerid}
            
            })
            res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
                data: bannerSettingsDetails
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
   async updatebannerPhoto(req,res){
       try{
           const{bannerId,photo} =req.body
            let allatachment=[]
            for(let i=0; i<req.files.length; i++){
                await allatachment.push({
                    photoUrl:req.files[i].location,
                
                    })
            }
            // console.log(allatachment)
            if(allatachment){
                for(let j=0; j<allatachment.length; j++){
                    await db.bannerPhotosSettings.create({
                        bannerId:bannerId,
                        photoUrl: allatachment[j].photoUrl,
                    })
            
                }
            }
       
         res.status(200).send({
                status: 200,
                message: 'Data Save Successfully',
              
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
    async deletebannerSettings(req, res) {
        try {
            await db.bannerSettings.destroy({
                where: { id: req.query.id }
            });
            await db.bannerPhotosSettings.destroy({
                where:{bannerid:req.query.id}
            })
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

       async deletebannerSettingsphoto(req, res) {
        try {
            await db.bannerPhotosSettings.destroy({
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
    //update Index
      async updateIndex(req,res,next){
        try{
            const {Id,index} = req.body
            console.log(req.body)
            await db.bannerPhotosSettings.findOne({where: { id: Id }}).then(category =>{
                 if (category) {
                    db.bannerPhotosSettings.update({
                         id: index
                    }, { where: { id: Id } 
                    })
              
                    res.status(200).json({
                        mesage:"status Update Successfully!!!"
                    })
                }else{
                    res.status(400).json({
                        message:"something went wrong!!!"
                    })
                }

            })
              }catch(err){
            res.send(err)
            console.log(err)
        }
    },
       /// delete bannerphoto

      async deletebannerphoto(req, res) {
         
        try {
            await db.bannerPhotosSettings.destroy({
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

    // get single  by id
    async getbannerBannerTyp(req, res) {
        try {
            const bannerSettingsDetails = await db.bannerSettings.findOne({ where: { BannerType: req.query.BannerType } });
            res.status(200).send({
                status: 200,
                message: 'Data fetched Successfully',
                data: bannerSettingsDetails
            });
        }
        catch (error) {
            return res.status(400).send({
                message: 'Unable to fetch data',
                errors: error,
                status: 400
            });
        }
    }

}