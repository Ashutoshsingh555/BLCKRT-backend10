 import  uploadProductExcelCtrl from"../bulkCtrl/uploadProductExcelCtrl";
 import  express  from "express"
 import  upload from"../../../../awsImportExport";
 import  ImageInventoryCtrl from"../bulkCtrl/ImageInventoryCtrl"

 export const excelUploadRouter = express.Router()
 
 excelUploadRouter.post("/upload", upload.single("file"), uploadProductExcelCtrl.uploadexcell);
 excelUploadRouter.post("/updateprice", upload.single("file"), uploadProductExcelCtrl.updateproductPrice);
 excelUploadRouter.post("/uploadimgexcell", upload.single("file"), ImageInventoryCtrl.uploadImageInventoryExcell);
 excelUploadRouter.get("/imgexportInventory", ImageInventoryCtrl.exportUser);
 excelUploadRouter.delete("/truncatproduct", uploadProductExcelCtrl.truncateInventory);
 excelUploadRouter.get("/exportvarient", uploadProductExcelCtrl.expoortvarient);

 