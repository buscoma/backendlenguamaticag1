var Player = require("../models/mongo/player");
var RankingService = require("./ranking");
var bcrypt = require("bcryptjs");
let jwt = require("./auth/authenticateJWT");
let jwtRefresh = require("./auth/authenticateJWTRefresh");
let helpers = require("./helpers/helpers")


exports.PlayerSignUpSignIn = async function (player) {
	let playerRetrieved, playerLoggedIn;
	if (player.email)
		playerRetrieved = await Player.findOne({ email: player.email });
	else playerRetrieved = await Player.findOne({ name: player.name });
	if (!playerRetrieved) {
		// SignUp
		let hashedPassword = bcrypt.hashSync(player.password, 10);
		let newRanking = await RankingService.createRanking();
		let newPlayer = new Player({
			name: player.name,
			email: player.email,
			password: hashedPassword,
			date: Date(),
			ranking: newRanking.id,
			avatar: helpers.getRandomAvatar()
		});
		playerLoggedIn = await newPlayer.save();
	} else {
		// SignIn
		if (!bcrypt.compareSync(player.password, playerRetrieved.password))
			throw Error("Invalid name or email and password");
		else playerLoggedIn = playerRetrieved;
	}
	let accessToken = jwt.playerJWT(playerLoggedIn);
	playerLoggedIn.last_token = accessToken;
	playerLoggedIn.save();
	let refreshToken = jwtRefresh.playerJWTRefresh(playerLoggedIn);
	return {accessToken: accessToken, refreshToken: refreshToken};
};

exports.PlayerDetails = async function (player) {
	let playerRetrieved = await Player.findById(player.id);
	let ranking = await RankingService.getPlayerRanking(playerRetrieved);
	return {name: playerRetrieved.name,
			avatar: playerRetrieved.avatar,
			points: ranking.points}
};

exports.PlayerLastToken = async function (player) {
	let playerRetrieved = await Player.findById(player.id);
	return playerRetrieved.last_token;
};

exports.PlayerLogout = async function (player) {
	let playerRetrieved = await Player.findById(player.id);
	playerRetrieved.last_token = null;
	playerRetrieved.save();
}

exports.PlayersRankings = async function () {
	let playersRetrieved = await Player.find();
	let result = [];
	for (let player of playersRetrieved) {
		let playerRanking = await RankingService.getPlayerRanking(player);
		result.push({ name: player.name, points: playerRanking.points });
	}
	return result;
};

exports.LevelUp = async function (player, game, level) {
	let playerRetrieved = await Player.findById(player.id);
	await RankingService.playerWinGameLevel(playerRetrieved, game, level);
};