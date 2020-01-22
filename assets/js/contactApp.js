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

};

$("#submitMsg").on("click", submitMsg);
