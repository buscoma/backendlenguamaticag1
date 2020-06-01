let ComprensionLectora = require("../../models/mongo/comprensionLectora");

exports.getNivel = async function (nivel) {
    let query = {
        nivel: nivel
    };
    try {
        let nivel = await ComprensionLectora.find(query);
        return nivel;
    } catch (e) {
        throw Error("Error al recuperar el nivel de ComprensionLectora");
    }
};