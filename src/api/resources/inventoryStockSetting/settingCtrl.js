import { db } from '../../../models';
export default {

    /* Add user api start here................................*/



    async List(req, res, next) {
        try {
            db.inventoryStockSetting.findAll({where:{id:req.query.id}})
            .then(list => {
                res.status(200).json({ 'success': true,data:list});
            })
            .catch(function (err) {
                next(err)
            });
        }
        catch (err) {
            throw new RequestError('Error');
        }
    },
    
  
    async getinventoryStockSetting(req, res, next) {
        try {
            const{ id,SettingStatus} = req.body
            db.inventoryStockSetting.create({
                SettingStatus:SettingStatus,
                featuresId:1
                
            }).then(list => {
                res.status(200).json({ 'success': true,data:list});
            })
            .catch(function (err) {
                next(err)
            });
        }
        catch (err) {
            throw new RequestError('Error');
        }
         
    },
     async getinventoryStockSettingUpdate(req, res, next) {
        try {
            const{ id,SettingStatus} = req.body
            db.inventoryStockSetting.update({
                SettingStatus:SettingStatus,
                featuresId:1
                
            },{where:{id:id}}).then(list => {
                res.status(200).json({ 'success': true,data:list});
            })
            .catch(function (err) {
                next(err)
            });
        }
        catch (err) {
            throw new RequestError('Error');
        }
         
    },
   
}


