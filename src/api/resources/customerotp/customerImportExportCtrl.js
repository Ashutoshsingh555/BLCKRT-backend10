import {db} from"../../../models"
const { Op } = require("sequelize");
import  https from'node:https';
import xlsx from 'node-xlsx';


export default {
     uploadexcell :async (req, res) => {
      console.log(req.file,req.body)
      
    try{
     var fileName = `${req.file.location}`
        https.get(fileName,response => {
        var chunks = []
        response.on('data', chunk => chunks.push(chunk))
        .on('end', () => {
         var book = xlsx.parse(Buffer.concat(chunks))
            book.forEach((rows) => {
          
            rows.data.shift();
              let customer = [];
              // let  adress=[];
              // let adresss2=[];
              rows.data.forEach((row) => {
              let customers= {
                        Name:row[1],
                        loyalityConfId:1,
                        referId:1,
                        phone: row[2],
                        email: row[3],
                        totalOrder:row[4],
                        loyalityPoints: row[5],
                     
               };
                customer.push(customers);


                //   let adress1= {
                //     custId:row[0],
                //     area: row[6],
                // };
                // row[6]?adress.push(adress1):null;

                //    let adress2= {
                //     custId:row[0],
                //     area: row[7],
                // };
                // row[7]?adresss2.push(adress2):null;
             });
              db.customerModel.bulkCreate(customer)
              // db.mapcustomeradress.bulkCreate(adress)
              //  db.mapcustomeradress.bulkCreate(adresss2)
             .then(() => {
                  res.status(200).send({
                    message: "Uploaded the file successfully: " + req.file.originalname,
                  });
                })
                .catch((error) => {
                  res.status(500).send({
                    message: "Fail to import data into database!",
                    error: error.message,
                  });
                });
               },0)
            })
        .on('error', e => {
            res.status(500)
        })
   })
    return
                
           
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
}
}