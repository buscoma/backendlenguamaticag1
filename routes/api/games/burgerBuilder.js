var express = require("express");
var router = express.Router();
var BurgerBuilderController = require("../../../controllers/games/burgerBuilder");
var jwt = require("../../../services/auth/authenticateJWT");

router.get("/burgerBuilder", jwt.authenticateJWT, BurgerBuilderController.getNivel);
router.get(
	"/burgerBuilder/operacion",
	jwt.authenticateJWT,
	BurgerBuilderController.getOperacion
);

module.exports = router;
