<<<<<<< HEAD
const express = require("express");
const UserController = require("../controllers/users");
const users = require("./api/users");
const comprensionLectora = require("./api/comprensionLectora");
const juegoNumAPalabra = require("./api/juegoNumAPalabra");
const palabrasPerdidas = require("./api/palabrasPerdidas");
const authenticateJWT = require("../auth/authenticateJWT");

const router = express.Router();

// Authentication
router.post("/registration", authenticateJWT, UserController.createUser);
router.post("/login", UserController.loginUser);

// Users api
router.use("/users", users);
=======
let express = require('express');
let UserController = require('../controllers/users');
let users = require('./api/users');
let comprensionLectora = require('./api/comprensionLectora');
let player = require('./api/player');
let authenticateJWT = require('../auth/authenticateJWT');

let router = express.Router();

// Authentication
router.post('/registration', authenticateJWT, UserController.createUser);
router.post('/login', UserController.loginUser);

// users api
router.use('/users', users);
>>>>>>> master

// compresionLectora api
router.use("/comprensionLectora", comprensionLectora);
// juegoNumAPalabra api
router.use("/juegoNumAPalabra", juegoNumAPalabra);
// palabrasPerdidas api
router.use("/palabrasPerdidas", palabrasPerdidas);

// player api
router.use('/player', player);

module.exports = router;
