var mongoose = require('mongoose')


var PalabrasCorrectasSchema = new mongoose.Schema(
    {
        nivel: Number,
        palabras : [
            {
                palabra: String,
                esCorrecta: Boolean,
                Correccion: String,
            }
        ]
    }
);
const PalabrasCorrectas = mongoose.model(
    "PalabrasCorrectas",
    PalabrasCorrectasSchema,
    "palabrasCorrectas"
);
module.exports = PalabrasCorrectas; 