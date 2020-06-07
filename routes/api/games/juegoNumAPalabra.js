var express = require("express");
var router = express.Router();
var JuegoNumAPalabraController = require("../../../controllers/games/juegoNumAPalabra");
var authenticateJWT = require("../../../services/auth/authenticateJWT");

router.get(
	"/juegoNumAPalabra",
	authenticateJWT,
	JuegoNumAPalabraController.getNivel
);

module.exports = router;
