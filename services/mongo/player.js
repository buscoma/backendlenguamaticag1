var Player = require('../../models/mongo/player');
var RankingService = require('./ranking');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


exports.PlayerSignUp = async function (player) {
    let playerExists = false;
    if (player.email) {
        if (await Player.findOne({email: player.email})) {
            playerExists = true;
        }
    }
    if (player.name) {
        if (await Player.findOne({name: player.name})) {
            playerExists = true;
        }
    }
    if (!playerExists){
        let hashedPassword = bcrypt.hashSync(player.password, 10);
        let newRanking = await RankingService.createRanking();
        let newPlayer = new Player({
            name: player.name,
            email: player.email,
            password: hashedPassword,
            date: Date(),
            ranking: newRanking.id
        });
        let savedPlayer = await newPlayer.save();
        playerRefresh(savedPlayer._id);
        return {points: newRanking.points, gameStatus: newRanking.gameStatus};
    } else {
        throw Error("User already exists")
    }
}

exports.PlayerDetails = async function (player){
    let playerRetrieved = await Player.findById(player.id);
    if (playerRetrieved) {
        if (bcrypt.compareSync(player.password, playerRetrieved.password)) { // REVISAR DESDE ACA
            let playerRanking = await RankingService.getPlayerRanking(playerRetrieved);
            return {points: playerRanking.points, gameStatus: playerRanking.gameStatus};
        } else {
            throw Error("Invalid name/email or password");
        }
    } else {
        throw Error("User doesent exist");
    }
}

exports.PlayersRankings = async function() {
    let playersRetrieved = await Player.find();
    let result = [];
    for (let player of playersRetrieved) {
        let playerRanking = await RankingService.getPlayerRanking(player);
        result.push({name: player.name, points: playerRanking.points})
    }
    return result
}

exports.levelUp = async function (player_id , game, level) {
    let playerRetrieved = await Player.findById(player_id);
    if (!playerRetrieved){
        throw Error("Player not found");
    } else {
        let rankingUpdated = await RankingService.playerWinGameLevel(playerRetrieved, game, level);
        return {points: rankingUpdated.points, gameStatus: rankingUpdated.gameStatus};
    }
}

exports.playerRefresh = async function(player_id) {
    playerRetrieved = await Player.findById(player_id);
    if (!playerRetrieved){
        throw Error("Player not found");
    } else {
        return playerrJWT(player_id);
    }
}

playerrJWT = (player_id) => {
    return jwt.sign({
        id: player_id
    }, process.env.PLAYER_JWT_SECRET, {
        expiresIn: '24h'
    });
}
