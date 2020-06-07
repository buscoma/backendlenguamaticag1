var helper = require("../helpers/helpers");

exports.getNivel = async function (nivel) {
	try {
		return helper.getRandomSecuence(nivel);
	} catch (e) {
		throw Error("Error al recuperar el nivel de SecuenciaNumeros");
	}
};
