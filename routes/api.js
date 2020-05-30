var express = require('express')
var router = express.Router()
var UserController = require('../controllers/users');
var users = require('./api/users')
var comprensionLectora = require('./api/comprensionLectora')

// Authentication
router.post('/registration', UserController.createUser)
router.post('/login', UserController.loginUser)

// Users api
router.use('/users', users);

// compresionLectora api
router.use('/comprensionLectora', comprensionLectora);

module.exports = router;
