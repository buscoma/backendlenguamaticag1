const PalabrasCorrectas = require("../../models/mongo/games/palabrasCorrectas");
const helper = require("../helpers/helpers");

exports.getNivel = async function (nivel) {
    let query = {
        nivel: nivel,
    };
    try {
        let nivel = await PalabrasCorrectas.find(query);
        if (nivel)
            return helper.getRandomDocument(nivel);
        else
            throw Error("El nivel debe estar entre 1 y 3")
    } catch (e) {
        throw Error("Error al recuperar el nivel de PalabrasCorrectas");
    }
};
