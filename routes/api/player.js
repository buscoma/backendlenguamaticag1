let express = require('express');
let router = express.Router();
let PlayerController = require('../../controllers/player');
let authenticateJWT = require('../../auth/authenticateJWT');

router.get('/ranking', authenticateJWT, PlayerController.getRanking);
router.post('/signUp', authenticateJWT, PlayerController.signUp);
router.post('/signIn', authenticateJWT, PlayerController.signIn);
router.get('/levelUp', authenticateJWT, PlayerController.levelUp);

module.exports = router;