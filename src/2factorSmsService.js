import axios from"axios"
 var api_key = process.env.FACTOR_Key;


const sendBySms = async(phone, otp)=>{
    let greeting ="Customer"
   
return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${phone +" "}&from=BLCKRT&templatename=Buluckart_Otp_Tamplate&var1=${greeting}&var2=${otp}`)
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
 }

const sendMsgBySms = async(clients, alerttext,message)=>{
   
  return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${clients}&from=BLCKRT&templatename=Clients_Notification&var1=${alerttext}&var2=${message}`).then(res =>{
      console.log(res,"ggfg")
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
}
        
    //order placing
    
const orderconfirmmsg = async(isd, custPhone,)=>{
    
   let msg=`Dear Customer,Your order has been processed.Will be delivered as per scheduled time.You can track the status in the Buluckart App.
Regards,Buluckart`
  return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${custPhone}&from=BLCKRT&templatename=Order+Received+Template&var1=${isd}&var2=+916309301143`).then(res =>{
      console.log(res+"ggfg")
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
  
     
}
//order deliverd
const senddeliverdMsg = async(id, custno,)=>{
  
    return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${custno}&from=BLCKRT&templatename=Order+delivered&var1=buluckart`).then(res =>{
      console.log(res+"ggfg")
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
  
     
}

//out for delivering
 const outfordelivery = async(id, custno,runner )=>{
 return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${custno}&from=BLCKRT&templatename=Order+Out+for+Delivery&var1=${id}&var2=Mr./Mrs${runner}`).then(res =>{
      console.log(res+"ggfg")
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
  
     
}


//order cancelation
 const ordercancelation = async(id, custno )=>{
     let msgsc= `cancelled. We hope to see you soon again soon.
Regards,Buluckart`
 return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=${api_key}&to=${custno}&from=BLCKRT&templatename=Order+Cancelled&var1= `).then(res =>{
      console.log(res+"ggfg")
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
  
     
}

//order shiping
 const ordershiping = async(custno)=>{
   return axios.get(`https://2factor.in/API/R1/?module=TRANS_SMS&apikey=0f208537-cc49-11ec-9c12-0200cd936042&to=${custno}&from=BLCKRT&templatename=shiping+tamplate&var1= `).then(res =>{
     
  })
    .then(res => {
        console.log(`statusCode: ${res}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });
    
  
     
}
module.exports ={
    sendBySms,
    sendMsgBySms,
    orderconfirmmsg,
    outfordelivery,
    ordercancelation,
    ordershiping,
    senddeliverdMsg
  
}