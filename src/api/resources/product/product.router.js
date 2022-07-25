import express from 'express';
import productController from './product.controller';
import { sanitize } from '../../../middleware/sanitizer';
import upload from '../../../awsbucket';

export const productRouter = express.Router();
productRouter.route('/add').post(sanitize(), upload.array('file', 10),productController.addProduct);
productRouter.route('/getAllproduct').get(sanitize(), productController.index);
productRouter.route('/getAllproductList').get(sanitize(), productController.getAllProductList);
productRouter.route('/getAllproductList2').get(sanitize(), productController.getAllProductList2);
productRouter.route('/update').post(sanitize(),upload.array('file', 10), productController.update);
productRouter.route('/getProductByCategory').get(sanitize(), productController.getProductListByCategory);
productRouter.route('/getProductById').get(sanitize(), productController.getProductListById);
productRouter.route('/getWebProductById').get(sanitize(), productController.getWebProductListById);
productRouter.route('/product-offer').post(sanitize(), productController.addProductOffer);
productRouter.route('/getAllProductOffer').get(sanitize(), productController.getProductOffer);
productRouter.route('/delete').delete(sanitize(), productController.productDelete);
productRouter.route('/deleteOfferById/:id').get(sanitize(), productController.productOfferDelete);
productRouter.route('/upload-img').post(sanitize(), upload.array('file', 10), productController.multiplePhotoUpload);
productRouter.route('/getAllPhoto').get(sanitize(), productController.getAllPhoto);
productRouter.route('/slider-photo/delete/:id').delete(sanitize(), productController.deleteSliderPhoto);
productRouter.route('/multydelete').post(sanitize(), productController.productMultyDelete);
productRouter.route('/getAllGroceryStaple').get(sanitize(), productController.getAllGrocerryStaples);
productRouter.route('/getAllByCategory').post(sanitize(), productController.GetAllByCategory);
productRouter.route('/gcatalogsearch/result').get(sanitize(), productController.getFilterbyProduct);
productRouter.route('/search_product').post( productController.searchProductBySubCat);
productRouter.route('/aws/delete/photo').post(sanitize(), productController.awsProductPhotoDelete);
productRouter.route('/status').post(sanitize(), productController.updatestatus);
productRouter.route('/multiactive').post(sanitize(), productController.updatemultiplestatus);
productRouter.route('/sortindex').post(sanitize(),productController.updateIndex);
productRouter.route('/varientList').get(sanitize(),productController.getAllvarientlist)
productRouter.route('/vrientdelete').post(sanitize(), productController.deletevarient);
productRouter.route('/vrientUpdate').post(sanitize(), productController.updatevarient);
productRouter.route('/deleterc').post(sanitize(), productController.deleteRecomended);
productRouter.route('/delatetg').post(sanitize(), productController.deletetedittags);
productRouter.route('/pricefilter').post(sanitize(), productController.productPrizefilter);
productRouter.route('/discountfilter').post(sanitize(), productController.productDiscountfilter);
productRouter.route('/search').post(sanitize(), productController.getrecentandsearch);
productRouter.route('/deletesearch').delete(sanitize(), productController.deletesearch);
productRouter.route('/getsearchlist').get(sanitize(), productController.getsearlist);












