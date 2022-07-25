import express from 'express';
import  referCtrl from './referCtrl';
import { sanitize } from '../../../../middleware/sanitizer';


export const referRouter = express.Router();   

referRouter.route('/add').post(sanitize(), referCtrl.addreferEarnModel);

referRouter.route('/getall').get(sanitize(), referCtrl.getreferall);
referRouter.route('/getby').get(sanitize(), referCtrl.getrefer);
referRouter.route('/delete/:id').delete(sanitize(), referCtrl.deleterefer);
referRouter.route('/update').post(sanitize(), referCtrl.updaterefer);
referRouter.route('/sharelink').post(sanitize(), referCtrl.shareReferLink);
referRouter.route('/varifylink').get(sanitize(), referCtrl.getcheckSharelink);
















