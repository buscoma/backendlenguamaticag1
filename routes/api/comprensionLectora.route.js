var express = require("express");
var router = express.Router();
var ComprensionLectoraController = require("../../controllers/compresionLectora.controller");
var Authorization = require("../../auth/authorization");

router.get("/test", function (req, res, next) {
  res.send("Llegaste a api/comprensionLectora.routes");
});

router.get("/", Authorization, ComprensionLectoraController.getNivel);
// Export the Router
module.exports = router;
