function submitMsg(sendMail){
    sendMail.preventDefault();

    var usrName = $("#usrName").val().trim();
    var usrEmail= $("#usrEmail").val().trim();
    var usrMsg = $("#msgCenter").val().trim();

    var mailOptions = {
        from: `<${usrEmail}>`,
        to: `ewhitepainter@gmail.com`,
        subject: `${usrName} <${usrEmail}> sent you a new message from yout site`,
        text: `${usrMsg}`
    };


    $.ajax("/contact.html", {
        type: "POST",
        data: mailOptions
    });

    $("#confirmMail").attr("style", "display: block;")
};

$("#contactForm").on("submit", submitMsg);


