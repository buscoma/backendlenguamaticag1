var express = require("express");
var router = express.Router();
var JuegoNumAPalabraController = require("../../controllers/juegoNumAPalabra");
var authenticateJWT = require("../../services/auth/authenticateJWT");

router.get("/", authenticateJWT, JuegoNumAPalabraController.getNivel);

module.exports = router;
