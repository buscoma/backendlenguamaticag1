let express = require('express');
let router = express.Router();
let UserController = require('../../controllers/users');
let authenticateJWT = require('../../auth/authenticateJWT');

router.get('/', authenticateJWT, UserController.getUsers);
router.put('/', authenticateJWT, UserController.updateUser);
router.delete('/:id', authenticateJWT, UserController.removeUser);

module.exports = router;