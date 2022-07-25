import  customerotpCtrl  from"./runnerAuthCtrl"
import express from 'express';
import { sanitize } from '../../../middleware/sanitizer';
import upload from '../../../awsbucket';


export const runnerRouterOtp = express.Router();
runnerRouterOtp.route('/sendotp').post(sanitize(),customerotpCtrl.sendOtp)
runnerRouterOtp.route("/createrunner").post(sanitize(), upload.single('avatar'), customerotpCtrl.createrunner)
runnerRouterOtp.route('/verify-otp').post(sanitize(),customerotpCtrl.verifyotp)
runnerRouterOtp.route('/activate/:id').put(sanitize(), upload.single('avatar'),customerotpCtrl.activate)
runnerRouterOtp.route('/getby/:id').get(sanitize(), customerotpCtrl.profilegetbyid)
runnerRouterOtp.route('/delete').delete(sanitize(), customerotpCtrl.deletecustomer)
runnerRouterOtp.route('/getrunnerauth').get(sanitize(), customerotpCtrl.getAllcustomerList)
runnerRouterOtp.route('/logout').get(sanitize(), customerotpCtrl.logout)
