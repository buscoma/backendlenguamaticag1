var express = require("express");
var router = express.Router();
var JuegoNumAPalabraController = require("../../../controllers/games/juegoNumAPalabra");
var jwt = require("../../../services/auth/authenticateJWT");

router.get(
	"/juegoNumAPalabra",
	jwt.authenticateJWT,
	JuegoNumAPalabraController.getNivel
);

module.exports = router;
