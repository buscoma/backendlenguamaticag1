/**ROUTE USER APIs. */
var express = require("express");

var router = express.Router();
var users = require("./api/user.route");
var comprensionLectora = require("./api/comprensionLectora.route");
router.use("/users", users);
router.use("/comprensionLectora", comprensionLectora);

module.exports = router;
