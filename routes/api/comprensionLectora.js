var express = require("express");
var router = express.Router();
var ComprensionLectoraController = require("../../controllers/comprensionLectora");
var authenticateJWT = require("../../auth/authenticateJWT");

router.get("/", authenticateJWT, ComprensionLectoraController.getNivel);

module.exports = router;
