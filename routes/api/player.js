let express = require("express");
let router = express.Router();
let PlayerController = require("../../controllers/player");
let authenticateJWT = require("../../services/auth/authenticateJWT");

router.post("/authenticate", PlayerController.signUpSignIn);
router.get("/ranking", authenticateJWT, PlayerController.getRanking);
router.get("/levelUp", authenticateJWT, PlayerController.levelUp);
router.get("/details", authenticateJWT, PlayerController.playerDetails);

module.exports = router;
