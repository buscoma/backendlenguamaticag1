var express = require('express');
var router = express.Router();

router.get('/ping', function(_, res, _) {
  res.send('pong');
});

module.exports = router;
