var ComprensionLectora = require("../models/ComprensionLectora.model");

// Saving the context of this module inside the _the variable
_this = this;

exports.getNivel = async function (query) {
  try {
    var nivel = await ComprensionLectora.find(query);
    return nivel;
  } catch (e) {
    throw Error("Error al recuperar el nivel de ComprensionLectora");
  }
};
