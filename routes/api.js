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

// compresionLectora api
router.use('/comprensionLectora', comprensionLectora);

// player api
router.use('/player', player);

module.exports = router;
