const express = require("express");
const comprensionLectora = require("./api/games/comprensionLectora");
const juegoNumAPalabra = require("./api/games/juegoNumAPalabra");
const palabrasPerdidas = require("./api/games/palabrasPerdidas");
const burgerBuilder = require("./api/games/burgerBuilder");
const secuenciaNumeros = require("./api/games/secuenciaNumeros");
const palabrasCorrectas = require("./api/games/palabrasCorrectas");
const player = require("./api/player");
const router = express.Router();

// player api
router.use("/player", player);

// compresionLectora api
router.use("/games/comprensionLectora", comprensionLectora);
// juegoNumAPalabra api
router.use("/games/juegoNumAPalabra", juegoNumAPalabra);
// palabrasPerdidas api
router.use("/games/palabrasPerdidas", palabrasPerdidas);
// burgerBuilder api
router.use("/games/burgerBuilder", burgerBuilder);
// secuenciaNumeros api
router.use("/games/secuenciaNumeros", secuenciaNumeros);
// palabrasCorrectas api
router.use("/games/palabrasCorrectas", palabrasCorrectas);

module.exports = router;
