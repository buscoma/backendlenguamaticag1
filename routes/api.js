const express = require("express");
const comprensionLectora = require("./api/comprensionLectora");
const juegoNumAPalabra = require("./api/juegoNumAPalabra");
const palabrasPerdidas = require("./api/palabrasPerdidas");
const burgerBuilder = require("./api/burgerBuilder");
const player = require("./api/player");
const router = express.Router();

// player api
router.use("/player", player);

// compresionLectora api
router.use("/comprensionLectora", comprensionLectora);
// juegoNumAPalabra api
router.use("/juegoNumAPalabra", juegoNumAPalabra);
// palabrasPerdidas api
router.use("/palabrasPerdidas", palabrasPerdidas);
// burgerBuilder api
router.use("/burgerBuilder", burgerBuilder);

module.exports = router;
