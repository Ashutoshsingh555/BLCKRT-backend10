import express from 'express';
import  adminCtrl from './adminCtrl';
import { sanitize } from '../../../middleware/sanitizer';



export const adminContactRoute = express.Router();   

adminContactRoute.route('/add').post(sanitize(),adminCtrl.addadminContactUs);

adminContactRoute.route('/getall').get(sanitize(), adminCtrl.getadminContactUsall);
adminContactRoute.route('/getby').get(sanitize(), adminCtrl.getadminContactUs);
adminContactRoute.route('/delete').delete(sanitize(), adminCtrl.deleteadminContactUs);
adminContactRoute.route('/update').post(sanitize(), adminCtrl.updateadminContactUs);

















