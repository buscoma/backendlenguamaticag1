var mongoose = require("mongoose");

var BurgerBuilderSchema = new mongoose.Schema({
	nivel: Number,
	orden: {
		queso: Number,
		lechuga: Number,
		panceta: Number,
		carne: Number,
	},
	operacion: {
		numero1: Number,
		numero2: Number,
		operador: String,
		respuesta: Number,
	},
});

const BurgerBuilder = mongoose.model(
	"BurgerBuilder",
	BurgerBuilderSchema,
	"burgerBuilder"
);

module.exports = BurgerBuilder;
