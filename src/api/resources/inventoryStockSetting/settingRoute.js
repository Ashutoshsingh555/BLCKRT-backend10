import express from 'express';
import settingCtrl from './settingCtrl';
import { sanitize } from '../../../middleware/sanitizer';


export const inStockRoute = express.Router();

inStockRoute.route('/create').post(sanitize(),  settingCtrl.getinventoryStockSetting);
inStockRoute.route('/listby').get(sanitize(),settingCtrl.List);
inStockRoute.route('/update').post(sanitize(),settingCtrl.getinventoryStockSettingUpdate);










