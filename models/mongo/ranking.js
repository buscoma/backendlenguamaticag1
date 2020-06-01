var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')

var RankingSchema = new mongoose.Schema({
    points: Number,
    gameStatus: {
        burgerBuilder: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        },
        comprensionLectora: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        },
        juegoNumAPalabra: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        },
        palabrasCorrectas: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        },
        palabrasPerdidas: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        },
        secuenciaNumeros: {
            1: Boolean,
            2: Boolean,
            3: Boolean
        }
    }
})

RankingSchema.plugin(mongoosePaginate);
const Ranking = mongoose.model('Ranking', RankingSchema);

module.exports = Ranking;