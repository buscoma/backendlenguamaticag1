<<<<<<< HEAD
var ComprensionLectora = require("../../models/mongo/comprensionLectora");
var helper = require('../helpers/helpers');

exports.getNivel = async function (nivel) {
    var query = {
        nivel: nivel,
    };
    try {
        var nivel = await ComprensionLectora.find(query);
        return helper.getRandomDocument(nivel);
=======
let ComprensionLectora = require("../../models/mongo/comprensionLectora");

exports.getNivel = async function (nivel) {
    let query = {
        nivel: nivel
    };
    try {
        let nivel = await ComprensionLectora.find(query);
        return nivel;
>>>>>>> master
    } catch (e) {
        throw Error("Error al recuperar el nivel de ComprensionLectora");
    }
};