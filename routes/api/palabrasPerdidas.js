var express = require("express");
var router = express.Router();
var PalabrasPerdidasController = require("../../controllers/palabrasPerdidas");
var authenticateJWT = require("../../auth/authenticateJWT");

router.get("/", authenticateJWT, PalabrasPerdidasController.getNivel);

module.exports = router;
