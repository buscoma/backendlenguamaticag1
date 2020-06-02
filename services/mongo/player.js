var Player = require('../../models/mongo/player');
var RankingService = require('./ranking');
var bcrypt = require('bcryptjs');


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
        var hashedPassword = bcrypt.hashSync(player.password, 10);
        var newRanking = await RankingService.createRanking();
        var newPlayer = new Player({
            name: player.name,
            email: player.email,
            password: hashedPassword,
            date: Date(),
            ranking: newRanking.id
        });
        let savedPlayer = await newPlayer.save();
        return {id: savedPlayer._id, points: newRanking.points, gameStatus: newRanking.gameStatus};
    } else {
        throw Error("User already exists")
    }
}

exports.PlayerSignIn = async function (player){
    var playerRetrieved;
    if (player.email) {
        playerRetrieved = await Player.findOne({
            email: player.email
        });
    }  else {
        playerRetrieved = await Player.findOne({
            name: player.name
        });
    }
    if (playerRetrieved) {
        if (bcrypt.compareSync(player.password, playerRetrieved.password)) {
            let playerRanking = await RankingService.getPlayerRanking(playerRetrieved);
            return {id: playerRetrieved._id, points: playerRanking.points, gameStatus: playerRanking.gameStatus};
        } else {
            throw Error("Invalid name/email or password");
        }
    } else {
        throw Error("User doesent exist");
    }
}

exports.PlayersRankings = async function() {
    playersRetrieved = await Player.find();
    let result = [];
    for (let player of playersRetrieved) {
        let playerRanking = await RankingService.getPlayerRanking(player);
        result.push({name: player.name, points: playerRanking.points})
    }
    return result
}

exports.levelUp = async function (player_id , game, level) {
    playerRetrieved = await Player.findById(player_id);
    if (!playerRetrieved){
        throw Error("Player not found");
    } else {
        let rankingUpdated = await RankingService.playerWinGameLevel(playerRetrieved, game, level);
        return {id: player_id, points: rankingUpdated.points, gameStatus: rankingUpdated.gameStatus};
    }

}

