var usrName= "";
var usrEmail="";
var usrMsg="";

function submitMsg(sendMail){
    sendMail.preventDefault();

    usrName = $("#usrName").val().trim();
    console.log(usrName);

    usrEmail= $("#usrEmail").val().trim();
    console.log(usrEmail);

    usrMsg = $("#msgCenter").val().trim();
    console.log(usrMsg);

    window.location = "mailto:evwhite2@gmail.com?subject=New Email from "+usrName+" at "+usrEmail+" &body="+usrMsg;

    // Email.send({
    //     SecureToken : "d216a203-2295-4a88-ab0e-0bf5a8a7bf64",
    //     To : 'evwhite2@gmail.com',
    //     From : usrEmail,
    //     Subject : `New inquiry from${usrName}`,
    //     Body : usrMsg
    // }).then(function(message){
    //     console.log(message);
    // })
};

// var form = $("#contactForm");



$("#submitMsg").on("click", submitMsg)
