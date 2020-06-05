const PalabrasPerdidas = require("../../models/mongo/games/palabrasPerdidas");
const helper = require("../helpers/helpers");

exports.getNivel = async function (nivel) {
    let query = {
        nivel: nivel,
    };
    try {
        let nivel = await PalabrasPerdidas.find(query);
        return helper.getRandomDocument(nivel);
    } catch (e) {
        throw Error("Error al recuperar el nivel de PalabrasPerdidas");
    }
};
