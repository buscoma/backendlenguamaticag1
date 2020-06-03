let PlayerService = require('../services/mongo/player');

exports.signUp = async function (req, res, _) {
    if (!req.body.password || (!req.body.email && !req.body.name)) {
        return res.status(400).json({message: "Must specify name or email and password"})
    }
    let NewPlayer = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    try {
        let Player = await PlayerService.PlayerSignUp(NewPlayer)
        return res.status(201).json({data: Player, message: "Player signed up"})
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: e.message});
    }
}

exports.signIn = async function (req, res, _) {
    if (!req.body.password || (!req.body.email && !req.body.name)) {
        return res.status(400).json({message: "Must specify name or email and password"})
    }
    let SignInPlayer = {
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        password: req.body.password,
    }
    try {
        let Player = await PlayerService.PlayerSignIn(SignInPlayer);
        return res.status(200).json({data: Player, message: "Success"});
    } catch (e) {
        console.log(e);
        return res.status(401).json({message: e.message});
    }
}

exports.getRanking = async function (_, res, _) {
    try {
        let Ranking = await PlayerService.PlayersRankings()
        return res.status(200).json({data: Ranking, message: "Ranking list"});
    } catch (e) {
        console.log(e);
        return res.status(400).json({message: e.message});
    }
}

exports.levelUp = async function (req, res, _) {
    let player_id = req.player.id;
    let game = req.query.game;
    let level = req.query.level;
    if (!player_id || !game || !level) {
        return res.status(400).json({message: "Must specify game and level in params"});
    }
    try {
        let playerUpdated = await PlayerService.levelUp(player_id, game, level);
        return res.status(200).json({data: playerUpdated, message: "Player updated"});
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message});
    }
}