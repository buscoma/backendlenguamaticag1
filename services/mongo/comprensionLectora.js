var ComprensionLectora = require("../../models/mongo/comprensionLectora");

exports.getNivel = async function (nivel) {
    var query = {
        nivel: nivel
    }
    try {
        var nivel = await ComprensionLectora.find(query);
        return nivel;
    } catch (e) {
        throw Error("Error al recuperar el nivel de ComprensionLectora");
    }
};