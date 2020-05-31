var express = require('express');
var UserController = require('../controllers/users');
var users = require('./api/users');
var comprensionLectora = require('./api/comprensionLectora');
var juegoNumAPalabra = require('./api/juegoNumAPalabra');
var authenticateJWT = require('../auth/authenticateJWT');

var router = express.Router();

// Authentication
router.post('/registration', authenticateJWT, UserController.createUser)
router.post('/login', UserController.loginUser)

// Users api
router.use('/users', users);

// compresionLectora api
router.use('/comprensionLectora', comprensionLectora);
// juegoNumAPalabra api
router.use('/juegoNumAPalabra', juegoNumAPalabra);
module.exports = router;