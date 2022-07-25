import { db } from '../../../../models';


export default {

    /* Add user api start here................................*/

    async index(req, res, next) {
        try {
            // console.log(req.body)
            const { InstanceDelivery,OrderBuffertime, OrderTimeSetingStatus,OrderTimeTaken,MaxOrder,appDisplayMsg,timeSlote} = req.body;
           await  db.deliverySlotSettings.create({
                           InstanceDelivery:InstanceDelivery,
                           OrderBuffertime:OrderBuffertime,
                           OrderTimeTaken:OrderTimeTaken,
                           MaxOrder:MaxOrder,
                           appDisplayMsg:appDisplayMsg,
                           OrderTimeSetingStatus: OrderTimeSetingStatus
                        }) 
                  
                .then((slotsdata) => {
                    console.log(slotsdata)
                    if (timeSlote) {
                        let slotArray = [];

                        for (var i = 0; i < timeSlote.length; i++) {
                            slotArray.push({
                                deliverySlotId: slotsdata.id,
                                timeSlotfrom:timeSlote[i].timeSlotfrom,
                                timeSlotTo:timeSlote[i].timeSlotTo, 
                                Mon:timeSlote[i].Mon,
                                Tue:timeSlote[i].Tue,
                                Wed:timeSlote[i].Wed,
                                Thu:timeSlote[i].Thu,
                                Fri:timeSlote[i].Fri,
                                Sat:timeSlote[i].Sat,
                                Sun:timeSlote[i].Sun
                            })
                        }
                        // console.log(slotArray)
                        return db.timeSlots.bulkCreate(slotArray).then((r) => [r])
                    }
                })
                .then((success) => {
                    res.status(200).json({ 'success': true });
                })
                .catch(function (err) {
                    console.log(err)
                    res.status(500).json({ 'errors': ['Error adding cart'] });
                });
        }
        catch (err) {
            throw new RequestError('Error');
        }
    },
    //get data
    
    async getSlotList(req, res, next) {
      
        try {
            db.deliverySlotSettings.findAll({include: [{ model: db.timeSlots}] })
             .then(list => {
                    res.status(200).json({ 'success': true, order: list });
                })
                .catch(function (err) {
                    next(err)
                });


        }
        catch (err) {
            res.status(500).json({ 'errors': "" + err });
        }
    },
    //by id
     async getSlotListby(req, res, next) {
      
        try {
            db.deliverySlotSettings.findAll({
              where: { id: req.query.id } ,
              include: [{ model: db.timeSlots}]
            })

                .then(list => {
                    res.status(200).json({ 'success': true, data: list });
                })
                .catch(function (err) {
                    next(err)
                });


        }
        catch (err) {
            res.status(500).json({ 'errors': "" + err });
        }
    },

    //update
    async update(req, res, next) {
        try {
           
            const { slotId,InstanceDelivery,OrderBuffertime, OrderTimeSetingStatus,OrderTimeTaken,MaxOrder,appDisplayMsg,timeSlote} = req.body;
                await db.deliverySlotSettings.findOne({
                where:{id :slotId},
                include:[{model:db.timeSlots}]}).then(slotlist =>{
                  if(slotlist){
                        db.deliverySlotSettings.update({
                           InstanceDelivery:InstanceDelivery,
                           OrderBuffertime:OrderBuffertime,
                           OrderTimeTaken:OrderTimeTaken,
                           MaxOrder:MaxOrder,
                           appDisplayMsg:appDisplayMsg,
                           OrderTimeSetingStatus: OrderTimeSetingStatus
                         },{where:{id:slotId}})
                    }
                    if(timeSlote){
                            var alldata =json(slotlist)
                              var idx = alldata.timeSlots
                             var id = idx.map(el => el.id) 
                            console.log(id)
                          
                            db.timeSlots.findAll ({ where: { deliverySlotId:slotId }})
                        for (var i = 0; i < timeSlote.length; i++) {
                            if(id[i]){
                                db.timeSlots.update({
                                        deliverySlotId:slotId,
                                        timeSlotfrom:timeSlote[i].timeSlotfrom,
                                        timeSlotTo:timeSlote[i].timeSlotTo, 
                                        Mon:timeSlote[i].Mon,
                                        Tue:timeSlote[i].Tue,
                                        Wed:timeSlote[i].Wed,
                                        Thu:timeSlote[i].Thu,
                                        Fri:timeSlote[i].Fri,
                                        Sat:timeSlote[i].Sat,
                                        Sun:timeSlote[i].Sun }, { where: { id:id[i]}})
                                    }else{
                                        db.timeSlots.create({
                                        deliverySlotId: slotId,
                                            timeSlotfrom:timeSlote[i].timeSlotfrom,
                                            timeSlotTo:timeSlote[i].timeSlotTo, 
                                            Mon:timeSlote[i].Mon,
                                            Tue:timeSlote[i].Tue,
                                            Wed:timeSlote[i].Wed,
                                            Thu:timeSlote[i].Thu,
                                            Fri:timeSlote[i].Fri,
                                            Sat:timeSlote[i].Sat,
                                            Sun:timeSlote[i].Sun
                                        })

                                    }
                                }       
                     }

                }).then((success) => {
                    res.status(200).json({ 'success': true });
                })
                .catch(function (err) {
                    console.log(error);
                    res.status(500).json({ 'errors': ['Error Add Products'] });
                })
                
            }catch (error) {
                return res.status(400).send({
                    message: 'Unable to insert data',
                    errors: error,
                    status: 400
                });
        }
    },

    //sttus
    async updateTime(req, res, next) {
        try {
           
            const { slotId, OrderTimeSetingStatus} = req.body;
                await db.deliverySlotSettings.findOne({
                where:{id :slotId},
                include:[{model:db.timeSlots}]}).then(slotlist =>{
                  if(slotlist){
                        db.deliverySlotSettings.update({
                           OrderTimeSetingStatus: OrderTimeSetingStatus
                         },{where:{id:slotId}})
                    }
                    
                }).then((success) => {
                    res.status(200).json({ 'success': true });
                })
                .catch(function (err) {
                    console.log(error);
                    res.status(500).json({ 'errors': ['Error Add Products'] });
                })
                
            }catch (error) {
                return res.status(400).send({
                    message: 'Unable to insert data',
                    errors: error,
                    status: 400
                });
        }
    },
    
//delete  dynamic3
 async deletedata(req,res,next){
        try{
            await db.timeSlots.destroy({where:{id:req.query.id}}).then(data => {
                    res.status(200).json({ 'success': true, });
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