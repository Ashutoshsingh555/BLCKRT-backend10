import express from 'express';
import giftCtrls from './giftCtrls';
import { sanitize } from '../../../../middleware/sanitizer';
import upload from '../../../../awsavtar'


export const giftoffersRoute = express.Router();

giftoffersRoute.route('/add').post(sanitize(), upload.single('photo'),giftCtrls.addGiftOffers);
giftoffersRoute.route('/getoffers').get(sanitize(),giftCtrls.getallOffers)
giftoffersRoute.route('/delete').delete(sanitize(),giftCtrls.deleteOffers)
giftoffersRoute.route('/update').post(sanitize(), upload.single('photo'),giftCtrls.updateOffers);


















