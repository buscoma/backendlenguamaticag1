var express = require("express");
var router = express.Router();
var PalabrasPerdidasController = require("../../../controllers/games/palabrasPerdidas");
var authenticateJWT = require("../../../services/auth/authenticateJWT");

router.get(
	"/palabrasPerdidas",
	authenticateJWT,
	PalabrasPerdidasController.getNivel
);

module.exports = router;
