import express from 'express';
import bannerCtrl from './bannerCtrl';
import { sanitize } from '../../../../middleware/sanitizer';
import upload from '../../../../awsavtar'


export const bannerRouter = express.Router();

bannerRouter.route('/add').post(sanitize(),bannerCtrl.addbannerSettings);
bannerRouter.route('/addbanners').post(sanitize(), upload.single('photo'), bannerCtrl.addbannerSettingsphoto);
bannerRouter.route('/update').post(sanitize(), upload.single('photo'), bannerCtrl.updatebannerSettingsphoto);
bannerRouter.route('/getall').get(sanitize(), bannerCtrl.getbannerSettingsall);
bannerRouter.route('/getby/:id').get(sanitize(), bannerCtrl.getbannerSettings);
bannerRouter.route('/getByCategory').get(sanitize(), bannerCtrl.getbannerBannerTyp);
bannerRouter.route('/categoryBanner').get(sanitize(), bannerCtrl.getcategororybanner);
bannerRouter.route('/categoryBannerByid').get(sanitize(), bannerCtrl.getcategororybannerbyid);
bannerRouter.route('/deletephoto').delete(sanitize(), bannerCtrl.deletebannerSettingsphoto);
bannerRouter.route('/delete').delete(sanitize(), bannerCtrl.deletebannerSettings);
bannerRouter.route('/update').post(sanitize(), bannerCtrl.updatebannerSettings);
bannerRouter.route('/indexupdate').post(sanitize(),bannerCtrl.updateIndex)
















