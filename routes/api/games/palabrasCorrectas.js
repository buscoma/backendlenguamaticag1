let express = require("express");
let router = express.Router();
let PalabrasCorrectasController = require("../../../controllers/games/palabrasCorrectas");
let jwt = require("../../../services/auth/authenticateJWT");

router.get(
	"/palabrasCorrectas",
	jwt.authenticateJWT,
	PalabrasCorrectasController.getNivel
);

module.exports = router;
