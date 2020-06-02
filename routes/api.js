const express = require("express");
const UserController = require("../controllers/users");
const users = require("./api/users");
const comprensionLectora = require("./api/comprensionLectora");
const juegoNumAPalabra = require("./api/juegoNumAPalabra");
const palabrasPerdidas = require("./api/palabrasPerdidas");
const burgerBuilder = require("./api/burgerBuilder");
const authenticateJWT = require("../auth/authenticateJWT");
let player = require("./api/player");
const router = express.Router();

// Authentication
router.post("/registration", authenticateJWT, UserController.createUser);
router.post("/login", UserController.loginUser);

// Users api
router.use("/users", users);

// compresionLectora api
router.use("/comprensionLectora", comprensionLectora);
// juegoNumAPalabra api
router.use("/juegoNumAPalabra", juegoNumAPalabra);
// palabrasPerdidas api
router.use("/palabrasPerdidas", palabrasPerdidas);
// player api
router.use("/player", player);
// burgerBuilder api
router.use("/burgerBuilder", burgerBuilder);

module.exports = router;
