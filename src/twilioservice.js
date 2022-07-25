const smsSid = process.env.SMS_SID;
const smsAuthToken = process.env.SMS_AUTH_TOKEN;
const twilio = require('twilio')(smsSid, smsAuthToken, {
    lazyLoading: true,
});


const sendBySms = (phone, otp)=>{
    
     return twilio.messages.create({
        to: phone,
        from: process.env.SMS_FROM_NUMBER,
        body: `Your Buluckart OTP is ${otp}`,
    });
}
const sendAlertSms = (clients, alerttext,message)=>{
    
     return twilio.messages.create({
        to: clients,
        from: process.env.SMS_FROM_NUMBER,
        body: `Your  buluckart alert message ${alerttext} MESSAGE:-${message}`,
    });
}


module.exports ={
    sendBySms,
    sendAlertSms
}