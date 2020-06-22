let PlayerService = require("../services/player");

exports.signUpSignIn = async function (req, res, _) {
	if (!req.body.password || (!req.body.email && !req.body.name)) {
		return res
			.status(400)
			.json({ message: "Must specify name or email and password" });
	}
	let player = {
		name: req.body.name ? req.body.name : null,
		email: req.body.email ? req.body.email : null,
		password: req.body.password,
	};
	try {
		let response = await PlayerService.PlayerSignUpSignIn(player);
		return res.status(200).json(response);
	} catch (e) {
		console.log(e);
		return res.status(401).json({ message: e.message });
	}
};

exports.getRanking = async function (_, res, _) {
	try {
		let ranking = await PlayerService.PlayersRankings();
		return res.status(200).json({ data: ranking });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: e.message });
	}
};

exports.levelUp = async function (req, res, _) {
	let game = req.query.game;
	let level = req.query.level;
	if (!game || !level) {
		return res
			.status(400)
			.json({ message: "Must specify game and level in params" });
	}
	try {
		await PlayerService.LevelUp(req.player, game, level);
		return res.status(200).json({ message: "Player updated" });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: e.message });
	}
};

exports.playerDetails = async function (req, res, _) {
	console.log("player");
	console.log(req.player);
	console.log("player");
	try {
		let playerDetails = await PlayerService.PlayerDetails(req.player);
		return res.status(200).json({ data: playerDetails });
	} catch (e) {
		console.log(e);
		return res.status(400).json({ message: e.message });
	}
};
