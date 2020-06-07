let Ranking = require("../models/mongo/ranking");

exports.createRanking = async function () {
	let newRanking = new Ranking({
		points: 0,
		gameStatus: {
			burgerBuilder: {
				1: false,
				2: false,
				3: false,
			},
			comprensionLectora: {
				1: false,
				2: false,
				3: false,
			},
			juegoNumAPalabra: {
				1: false,
				2: false,
				3: false,
			},
			palabrasCorrectas: {
				1: false,
				2: false,
				3: false,
			},
			palabrasPerdidas: {
				1: false,
				2: false,
				3: false,
			},
			secuenciaNumeros: {
				1: false,
				2: false,
				3: false,
			},
		},
	});
	let savedRanking = await newRanking.save();
	return savedRanking;
};

exports.getPlayerRanking = async function (player) {
	let playerRanking = await Ranking.findById(player.ranking).select(
		"points gameStatus -_id"
	);
	return playerRanking;
};

exports.playerWinGameLevel = async function (player, game, level) {
	let id = player.ranking;
	let playerRanking = await Ranking.findById(id);
	if (
		level >= 1 &&
		level <= 3 &&
		Object.keys(playerRanking.gameStatus).includes(game)
	) {
		if (!playerRanking.gameStatus[game][level]) {
			playerRanking.points = playerRanking.points + Number(level) * 100;
		}
		playerRanking.gameStatus[game][level] = true;
		var savedPlayerRanking = await playerRanking.save();
		return savedPlayerRanking;
	} else {
		throw Error("Game not found or invalid level");
	}
};
