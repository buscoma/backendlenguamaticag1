let express = require("express");
let router = express.Router();
let PalabrasCorrectasController = require("../../../controllers/games/palabrasCorrectas");
let authenticateJWT = require("../../../services/auth/authenticateJWT");

router.get("/", authenticateJWT, PalabrasCorrectasController.getNivel);

module.exports = router;
