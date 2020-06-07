var mongoose = require("mongoose");

var CompresionLectoraSchema = new mongoose.Schema({
	nivel: Number,
	pregunta: String,
	respuestas: [
		{
			descripcion: String,
			correcta: Boolean,
		},
	],
});

const CompresionLectora = mongoose.model(
	"CompresionLectora",
	CompresionLectoraSchema,
	"comprensionLectora"
);

module.exports = CompresionLectora;
