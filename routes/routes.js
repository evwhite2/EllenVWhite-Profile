var express = require("express");

var router = express.Router();

router.get("/", (req, res)=>{
    res.send(__dirname+"index.html");
});

router.get("/portfolio.html", (req, res)=>{
    res.send(__dirname+"portfolio.html")
});

router.get("/contact.html", (req, res)=>{
    res.send(__dirname+"contact.html")
});


module.exports = router;    