let express = require("express");
let router = express.Router();
let PlayerController = require("../../controllers/player");
let jwt = require("../../services/auth/authenticateJWT");
let jwtRefresh = require("../../services/auth/authenticateJWTRefresh");

router.post("/authenticate", PlayerController.signUpSignIn);
router.get("/check_token_is_valid", jwt.authenticateJWT, (_, res) =>
	res.status(200).json({ message: "Success" })
);
router.get("/refresh", jwtRefresh.authenticateJWTRefresh, (req, res) =>
	res.status(200).json({token: jwt.playerJWT(req.player)})
);
router.get("/ranking", jwt.authenticateJWT, PlayerController.getRanking);
router.get("/levelUp", jwt.authenticateJWT, PlayerController.levelUp);
router.get("/details", jwt.authenticateJWT, PlayerController.playerDetails);

module.exports = router;
