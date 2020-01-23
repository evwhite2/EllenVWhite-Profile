var express = require("express");
var router = express.Router();

var nodemailer = require("nodemailer");
require('dotenv').config();

var envInfo = process.env.EMAIL_USER;
var envPW = process.env.EMAIL_PW;

router.get("/", (req, res)=>{
    res.send(__dirname+"index.html");
});

router.get("/portfolio.html", (req, res)=>{
    res.send(__dirname+"portfolio.html")
});

router.get("/contact.html", (req, res)=>{
    res.send(__dirname+"contact.html")
});

router.post("/contact.html", (req, res)=>{
     
    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: envInfo,
            pass: envPW
        }
    });

    
    transporter.sendMail(req.body, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

})


module.exports = router; 