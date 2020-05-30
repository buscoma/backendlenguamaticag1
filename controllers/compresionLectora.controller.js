var CompresionLectoraService = require('../services/comprensionLectora.service');

_this = this;

exports.getNivel = async function (req, res, next){
    var comprension = {
        nivel: req.query.nivel ? req.query.nivel : 1
    };
    try {
        var nivel = await CompresionLectoraService.getNivel(comprension);
        return res.status(200).json({status: 200, data: nivel, message: "Nivel recuperado exitosamente"});
    } catch (e) {
        return res.status(400).json({status: 400, message: e.message});
    }
}