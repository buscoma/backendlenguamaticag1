let BurgerBuilder = require("../../models/mongo/games/burgerBuilder");
let helper = require("../helpers/helpers");

exports.getNivel = async function (nivel) {
	var query = {
		nivel: nivel,
	};
	try {
		let nivel = await BurgerBuilder.find(query);
		return helper.getRandomDocument(nivel);
	} catch (e) {
		throw Error("Error al recuperar el nivel de BurgerBuilder");
	}
};

exports.getOperacion = async function (nivel) {
	let n1 = 1;
	let n2 = 1;
	let respuesta = 0;

	switch (nivel) {
		case "1":
			n1 = randomInt(1, 9);
			n2 = randomInt(1, 9);
			respuesta = n1 + n2;
			return {
				numero1: n1,
				numero2: n2,
				operador: "+",
				respuesta: respuesta,
			};
		case "2":
			n1 = randomInt(1, 100);
			n2 = randomInt(1, 30);
			respuesta = n1 + n2;
			return {
				numero1: n1,
				numero2: n2,
				operador: "+",
				respuesta: respuesta,
			};
		case "3":
			n1 = randomInt(16, 100);
			n2 = randomInt(1, 16);
			respuesta = n1 - n2;
			return {
				numero1: n1,
				numero2: n2,
				operador: "-",
				respuesta: respuesta,
			};
		default:
			throw Error(
				"Error al recuperar la operacion de BurgerBuilder. El nivel " +
					nivel +
					" informado no existe"
			);
	}
};

randomInt = (min, max) => {
	return min + Math.floor((max - min) * Math.random());
};
