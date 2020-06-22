var express = require("express");
var router = express.Router();
var SecuenciaNumerosController = require("../../../controllers/games/secuenciaNumeros");
var jwt = require("../../../services/auth/authenticateJWT");

router.get(
	"/secuenciaNumeros",
	jwt.authenticateJWT,
	SecuenciaNumerosController.getNivel
);

module.exports = router;
