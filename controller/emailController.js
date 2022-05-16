const {request, response}= require('express');
const nodeMailer = require('nodemailer');

const sendEmail = (req = request, resp = response)=>{
    let body = req.body;

    let config = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        post:587,
        auth:{
            user:'pruebaproyectoBaca@gmail.com',
            pass:'Fernando321'
        }
    });
    const options = {
        from: 'BRZyro',
        subject: body.subject,
        to: body.email,
        text: body.message
    };
    config.sendMail(options, function(error,result){
        if(error) return resp.json({ok:false,msg:error})
        return resp.json({
            ok:true,
            msg:result
        });
    })
}

module.exports={
    sendEmail
}
