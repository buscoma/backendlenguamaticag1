var express = require("express");
var router = express.Router();
var PalabrasPerdidasController = require("../../../controllers/games/palabrasPerdidas");
var jwt = require("../../../services/auth/authenticateJWT");

router.get(
	"/palabrasPerdidas",
	jwt.authenticateJWT,
	PalabrasPerdidasController.getNivel
);

module.exports = router;
