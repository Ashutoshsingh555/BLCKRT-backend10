 import excelJS from"exceljs"
 import { db } from '../../../../models';
const { Op } = require("sequelize");
import readXlsxFile from "read-excel-file/node";
 import  https from'node:https';
import xlsx from 'node-xlsx';


   const uploadImageInventoryExcell =async (req, res) => {
  try {
     var fileName = `${req.file.location}`
     if(fileName){
       await db.inventoryImageModel.destroy({
       where:{},
       truncate:true
     });

     }
    //  console.log(fileName)
    https.get(fileName,response => {
     
        var chunks = []
        response.on('data', chunk => chunks.push(chunk))
        .on('end', () => {
        
            var book = xlsx.parse(Buffer.concat(chunks))
            book.forEach((rows) => {
              // console.log(rows.data)
            rows.data.shift();
                
              let imageInvenTory = [];
     
      rows.data.forEach((row) => {
        //10
        let image = {
               photoUrl:row[0],
               name: row[1],
             };
         imageInvenTory.push(image);
  
  
  
      });
      db.inventoryImageModel.bulkCreate(imageInvenTory)
    
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
 
const exportUser = async (req, res) => {
  const workbook = new excelJS.Workbook();
  const worksheet = workbook.addWorksheet("invetoryimagedowlload");
  const path  = __basedir + "/public/exportfile/"

  worksheet.columns = [
    { header: "id", key: "id", width: 10 },
    { header: "photoUrl", key: "photoUrl", width: 10 },
    { header: "Name", key: "name", width: 10 },
  
  ];

  let counter = 1;
 
  let str = await db.inventoryImageModel.findAll().then(filedata =>{
            filedata.forEach((ele) => {
            ele.s_no = counter;
            worksheet.addRow(ele);
            counter++;
        });

     })

  


  worksheet.getRow(1).eachCell((cell) => {
    cell.font = { bold: true };
  });

  try {
    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader("Content-Disposition", `attachment; filename=uploadInventory.xlsx`);

    // return workbook.xlsx.write(res).then(() => {
    //   res.status(200);
    // });

    await workbook.xlsx.writeFile(`${path}/uploadInventory.xlsx`).then(() => {
      res.send({
        status: "success",
        message: "file successfully downloaded",
        path: `${path}/uploadInventory.xlsx`,
      });
    });
  } catch (err) {
    res.send({
      status: "error",
      message: "Something went wrong",
    });
  }
};

export default{
    exportUser,
    uploadImageInventoryExcell

}
