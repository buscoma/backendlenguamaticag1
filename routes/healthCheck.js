let express = require("express");
let router = express.Router();

router.get("/ping", function (_, res, _) {
	res.send("pong");
});

module.exports = router;
