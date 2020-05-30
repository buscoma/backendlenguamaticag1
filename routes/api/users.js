var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users');
var authenticateJWT = require('../../auth/authenticateJWT');

router.get('/', authenticateJWT, UserController.getUsers)
router.put('/', authenticateJWT, UserController.updateUser)
router.delete('/:id', authenticateJWT, UserController.removeUser)

module.exports = router;