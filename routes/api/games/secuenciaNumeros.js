var express = require("express");
var router = express.Router();
var SecuenciaNumerosController = require("../../../controllers/games/secuenciaNumeros");
var authenticateJWT = require("../../../services/auth/authenticateJWT");

router.get("/", authenticateJWT, SecuenciaNumerosController.getNivel);

module.exports = router;
