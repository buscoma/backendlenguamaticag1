var mongoose = require("mongoose");

var PalabrasPerdidasSchema = new mongoose.Schema({
	nivel: Number,
	frases: [
		{
			palabra: String,
			frase_frente: String,
			frase_atras: String,
		},
	],
});

const PalabrasPerdidas = mongoose.model(
	"PalabrasPerdidas",
	PalabrasPerdidasSchema,
	"palabrasPerdidas"
);

module.exports = PalabrasPerdidas;
