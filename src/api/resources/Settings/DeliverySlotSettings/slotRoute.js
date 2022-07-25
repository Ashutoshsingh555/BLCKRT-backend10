import slotCtrl from './slotCtrl';
import { sanitize } from '../../../../middleware/sanitizer';
import express from 'express';


export const deliverySlotRoute = express.Router();
deliverySlotRoute.route('/create').post(sanitize(),slotCtrl.index);
deliverySlotRoute.route('/getlist').get(sanitize(),slotCtrl.getSlotList);
deliverySlotRoute.route('/getlistby').get(sanitize(),slotCtrl.getSlotListby);
deliverySlotRoute.route('/update').post(sanitize(),slotCtrl.update);
deliverySlotRoute.route('/updatetime').post(sanitize(),slotCtrl.updateTime);
deliverySlotRoute.route('/delete').delete(sanitize(),slotCtrl.deletedata);