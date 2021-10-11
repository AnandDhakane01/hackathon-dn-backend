var express = require("express");
var router = express.Router();

const { register } = require("../controllers/register");
const registerInitialChecks = require("../middlewares/registerChecks");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

router.post("/register", registerInitialChecks, register);

module.exports = router;
