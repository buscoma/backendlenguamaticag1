var mongoose = require("mongoose");

var JuegoNumAPalabraSchema = new mongoose.Schema({
	nivel: Number,
	numero: Number,
	respuestas: [
		{
			descripcion: String,
			correcta: Boolean,
		},
	],
});

const JuegoNumAPalabra = mongoose.model(
	"JuegoNumAPalabra",
	JuegoNumAPalabraSchema,
	"juegoNumAPalabra"
);

module.exports = JuegoNumAPalabra;
