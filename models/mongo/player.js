var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var PlayerSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    playerLastToken: String,
    date: Date,
    ranking: mongoose.ObjectId,
})

PlayerSchema.plugin(mongoosePaginate);
const Player = mongoose.model('Player', PlayerSchema);

module.exports = Player;