var express = require("express");
var router = express.Router();
var BurgerBuilderController = require("../../../controllers/games/burgerBuilder");
var authenticateJWT = require("../../../services/auth/authenticateJWT");

router.get("/burgerBuilder", authenticateJWT, BurgerBuilderController.getNivel);
router.get(
	"/burgerBuilder/operacion",
	authenticateJWT,
	BurgerBuilderController.getOperacion
);

module.exports = router;
