let express = require("express");
let router = express.Router();
let ComprensionLectoraController = require("../../../controllers/games/comprensionLectora");
let jwt = require("../../../services/auth/authenticateJWT");

router.get(
	"/comprensionLectora",
	jwt.authenticateJWT,
	ComprensionLectoraController.getNivel
);

module.exports = router;
