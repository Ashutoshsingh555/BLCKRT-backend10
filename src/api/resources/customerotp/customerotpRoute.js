import  customerotpCtrl  from"./customerotpCtrl"
import express from 'express';
import { sanitize } from '../../../middleware/sanitizer';

// import upload from'../../../awsavtar'
import upload from '../../../awsbucket';


export const customerRouterOtp = express.Router();
customerRouterOtp.route('/sendotp').post(sanitize(), customerotpCtrl.sendOtp)
customerRouterOtp.route('/verify-otp').post(sanitize(),customerotpCtrl.verifyotp)
customerRouterOtp.route('/activate/:id').put(sanitize(),upload.single('avatar'),customerotpCtrl.activate)
customerRouterOtp.route('/createByadmin').post(sanitize(),customerotpCtrl.admincreatecustomer)
customerRouterOtp.route('/getby/:id').get(sanitize(), customerotpCtrl.profilegetbyid)
customerRouterOtp.route('/delete').delete(sanitize(),customerotpCtrl.deletecustomer)
customerRouterOtp.route('/getcustomer').get(sanitize(),customerotpCtrl.getAllcustomerList)
customerRouterOtp.route('/logout').get(sanitize(), customerotpCtrl.logout)
customerRouterOtp.route('/google').get(sanitize(), customerotpCtrl.googleLogin)
customerRouterOtp.route('/facebook').get(sanitize(), customerotpCtrl.facebookLogin)