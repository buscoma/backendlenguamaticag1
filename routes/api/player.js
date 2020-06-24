express = require("express");
router = express.Router();
let PlayerController = require("../../controllers/player");
let jwt = require("../../services/auth/authenticateJWT");
let jwtRefresh = require("../../services/auth/authenticateJWTRefresh");

router.post("/authenticate", PlayerController.signUpSignIn);
router.get("/refresh", jwtRefresh.authenticateJWTRefresh);
router.get("/logout", jwt.authenticateJWT, PlayerController.logout);
router.get("/ranking", jwt.authenticateJWT, PlayerController.getRanking);
router.get("/levelUp", jwt.authenticateJWT, PlayerController.levelUp);
router.get("/details", jwt.authenticateJWT, PlayerController.playerDetails);

module.exports = router;
