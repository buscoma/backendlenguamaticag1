var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var PlayerSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	date: Date,
	last_token: String,
	ranking: mongoose.ObjectId,
});

PlayerSchema.plugin(mongoosePaginate);
const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;
