var express = require("express");
var router = express.Router();
var BurgerBuilderController = require("../../controllers/burgerBuilder");
var authenticateJWT = require("../../services/auth/authenticateJWT");

router.get("/", authenticateJWT, BurgerBuilderController.getNivel);
router.get("/operacion", authenticateJWT, BurgerBuilderController.getOperacion);

module.exports = router;
