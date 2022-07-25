import {db} from"../../../../models";
const { Op } = require("sequelize");
import  https from'node:https';
import xlsx from 'node-xlsx';
const Product = db.product

export default {
     uploadexcell :async (req, res) => {
    try{
     var fileName = `${req.file.location}`
        https.get(fileName,response => {
        var chunks = []
        response.on('data', chunk => chunks.push(chunk))
        .on('end', () => {
         var book = xlsx.parse(Buffer.concat(chunks))
            book.forEach((rows) => {
            rows.data.shift();
              let product = [];
              let varients_1 =[];
              let varients_2 =[];
              let varients_3 =[];
              let varients_4 =[];
              let tegs_1 =[];
              let tegs_2=[];
              let tegs_3=[];
              let tegs_4=[];
              let tegs_5=[];
              let ProductPhoto1=[];
              let ProductPhoto2=[];
              let ProductPhoto3=[];
              let ProductPhoto4=[];
              rows.data.forEach((row) => {
              let products = {
                      name: row[0],
                      description:row[1],
                      originPlace:row[2],
                      aboutProduct:row[3],
                      nutrientsDetals:row[4],
                      storeUses:row[5],
                      photo:row[6],
                      lableType:row[7],
                      status: row[8],
                      isTex:row[9],
                      GSTrate:row[10],
                      GSTtyp: row[11],
                      HSNcode:row[12],
                      videoUpload:row[13],
                      categoryId: row[14],
                      subCategoryId: row[15],
                      settingId:1
               };
                product.push(products);
          
               let   varients1={
                    productId:row[16],
                    sort:row[17],
                    sku: row[18],
                    waightunitno: row[19],
                    unit:row[20],
                    mrp: row[21],
                    discount: row[22],
                    price: row[23],
                    stock:row[24],
                    minstock: row[25],
                    outofstock: row[26]
                  }
                  row[19]?varients_1.push(varients1):null

                  let   varients2={
                    productId:row[16],
                    sort:row[27],
                    sku: row[28],
                    waightunitno: row[29],
                    unit:row[30],
                    mrp: row[31],
                    discount: row[32],
                    price: row[33],
                    stock:row[34],
                    minstock: row[35],
                    outofstock: row[36]
                  }
                 row[29]?varients_2.push(varients2):null
                  let   varients3={
                        productId:row[16],
                        sort:row[37],
                        sku: row[38],
                        waightunitno: row[39],
                        unit:row[40],
                        mrp: row[41],
                        discount: row[42],
                        price: row[43],
                        stock:row[44],
                        minstock: row[45],
                        outofstock: row[46]
                  }
                  row[39]?varients_3.push(varients3):null

                 let   varients4={
                    productId:row[16],
                        sort:row[47],
                        sku: row[48],
                        waightunitno: row[49],
                        unit:row[50],
                        mrp: row[51],
                        discount: row[52],
                        price: row[53],
                        stock:row[54],
                        minstock: row[55],
                        outofstock: row[56]
                  }
                 row[49]?varients_4.push(varients4):null

               let tags1 ={
                        productId:row[16],
                        Name: row[57],
                        
                  }
                  row[57]?tegs_1.push(tags1):null
                let tags2 ={
                        productId:row[16],
                        Name: row[58]
                      
                  }
                  row[58]?tegs_2.push(tags2):null
                let tags3 ={
                        productId:row[16],
                        Name: row[59],
                  }
                  row[59]?tegs_3.push(tags3):null
                let tags4 ={
                        productId:row[16],
                        Name: row[60],
                      
                  }
                  row[60]?tegs_4.push(tags4):null

                let tags5 ={
                        productId:row[16],
                        Name: row[61],
                 }
                 row[61]?tegs_5.push(tags5):null
                  //photo
                  let photo1 ={
                        productId:row[16],
                        imgUrl: row[62],
                  }
                  row[62]?ProductPhoto1.push(photo1):null
                     let photo2 ={
                        productId:row[16],
                        imgUrl: row[63],
                  }
                 row[63]?ProductPhoto2.push(photo2):null
                     let photo3 ={
                        productId:row[16],
                        imgUrl: row[64],
                  }
                 row[64]?ProductPhoto3.push(photo3):null
                     let photo4 ={
                        productId:row[16],
                        imgUrl: row[65],
                   }
                  row[65]?ProductPhoto4.push(photo4):null
              });
              Product.bulkCreate(product)
              db.varientModel.bulkCreate(varients_1)
              db.varientModel.bulkCreate(varients_2)
              db.varientModel.bulkCreate(varients_3)
              db.varientModel.bulkCreate(varients_4)
              db.tagModel.bulkCreate(tegs_1)
              db.tagModel.bulkCreate(tegs_2)
              db.tagModel.bulkCreate(tegs_3)
              db.tagModel.bulkCreate(tegs_4)
              db.tagModel.bulkCreate(tegs_5)
              db.productphoto.bulkCreate(ProductPhoto1)
              db.productphoto.bulkCreate(ProductPhoto2)
              db.productphoto.bulkCreate(ProductPhoto3)
              db.productphoto.bulkCreate(ProductPhoto4).then(() => {
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
},
//update product prize
   updateproductPrice :async (req, res) => {
    try{
     var fileName = `${req.file.location}`
    //  console.log(fileName)
    https.get(fileName,response => {
     
        var chunks = []
        response.on('data', chunk => chunks.push(chunk))
        .on('end', () => {
        
            var book = xlsx.parse(Buffer.concat(chunks))
            book.forEach(async(rows) => {
            rows.data.shift();
    
              let varients_1 =[];
              let varients_2 =[];
              let varients_3 =[];
              let varients_4 =[];
              var vid1=[]
               rows.data.forEach(async (row) => {
                  
                let varients1={
                    productId:row[0],
                    sort:row[1],
                    sku: row[2],
                    waightunitno: row[3],
                    unit:row[4],
                    mrp: row[5],
                    discount: row[6],
                    price: row[7],
                    stock:row[8],
                    minstock: row[9],
                    outofstock: row[10]

                  }
                  varients_1.push(varients1)

                  
                  let   varients2={
                    productId:row[0],
                    sort:row[11],
                    sku: row[12],
                    waightunitno: row[13],
                    unit:row[14],
                    mrp: row[15],
                    discount: row[16],
                    price: row[17],
                    stock:row[18],
                    minstock: row[19],
                    outofstock: row[20]
                  }
                  varients_2.push(varients2)

              
                    let   varients3={
                    productId:row[0],
                    sort:row[21],
                    sku: row[22],
                    waightunitno: row[23],
                    unit:row[24],
                    mrp: row[25],
                    discount: row[26],
                    price: row[27],
                    stock:row[28],
                    minstock: row[29],
                    outofstock: row[30]
                  }
                  varients_3.push(varients3)


                let   varients4={
                    productId:row[0],
                    sort:row[31],
                    sku: row[32],
                    waightunitno: row[33],
                    unit:row[34],
                    mrp: row[35],
                    discount: row[36],
                    price: row[37],
                    stock:row[38],
                    minstock: row[39],
                    outofstock: row[40]
                  }
                  varients_4.push(varients4)
               });
                 
                  for(let i=0; i<varients_1.length; i++){
                     var allId1 = await db.varientModel.findAll({where:{productId:[varients_1[i].productId]}}).map(ele =>ele.id)
                     db.varientModel.update(varients_1[i],  {where: {[Op.and]: [{ id: {  [Op.like]: allId1[0] }}, { productId:  {  [Op.like]:[varients_1[i].productId]}}]}})
                    }
                    for(let j=0; j<varients_2.length; j++){
                       db.varientModel.update(varients_2[j],{where: {[Op.and]: [{ id: {  [Op.like]: allId1[1] }}, { productId:  {  [Op.like]:[varients_2[j].productId]}}]}})
                    }
                      for(let k=0; k<varients_3.length; k++){
                        
                          db.varientModel.update(varients_3[k],{where: {[Op.and]: [{ id: {  [Op.like]: allId1[2] }}, { productId:  {  [Op.like]:[varients_3[k].productId]}}]}})
                    }
                    for(let l=0; l<varients_4.length; l++){
                          
                            db.varientModel.update(varients_4[l],{where: {[Op.and]: [{ id: {  [Op.like]: allId1[3] }}, { productId:  {  [Op.like]:[varients_4[l].productId]}}]}})
                    }
        
                  res.status(200).send({
                    message: "Uploaded the file successfully: " + req.file.originalname,
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
},


//deleteProductInventoryTable
 truncateInventory : async(req,res,next) =>{
   console.log("ggfv")
   try{

     await db.product.destroy({
       where:{},
       truncate:true
     });
     await db.tagModel.destroy({
       where:{},
       truncate:true
     });
     await db.varientModel.destroy({
       where:{},
       truncate:true
     });
     await db.reccomendProduct.destroy({
       where:{},
       truncate:true
     })
       await db.productphoto.destroy({
       where:{},
       truncate:true
     })
       await res.status(200).send({
                message:"delete successfull"
            })
   }catch{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product.",
      });
   }

},
//exxxxxxxxxxxxvarienyt
expoortvarient: async(req,res,next) =>{
  try{
     await db.varientModel.findAll().then(list =>{
      res.status(200).json({
        message:"Success",
        data:list,
      })
    })

  }catch{
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving product.",
      });
     
   }

}

}