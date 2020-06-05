var ComprensionLectora = require("../../models/mongo/games/comprensionLectora");
var helper = require('../helpers/helpers');

exports.getNivel = async function (nivel) {
    var query = {
        nivel: nivel,
    };
    try {
        var nivel = await ComprensionLectora.find(query);
        return helper.getRandomDocument(nivel);
    } catch (e) {
        throw Error("Error al recuperar el nivel de ComprensionLectora");
    }
};