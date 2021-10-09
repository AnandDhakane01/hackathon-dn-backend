var express = require("express");
var router = express.Router();
const { register } = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post(
    "/register",
    (req, res, next) => {
        console.log("register");
        next();
    },
    register
);

module.exports = router;
