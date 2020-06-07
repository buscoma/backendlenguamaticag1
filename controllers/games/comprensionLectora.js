var CompresionLectoraService = require("../../services/games/comprensionLectora");

exports.getNivel = async function (req, res, _) {
	var nivel = req.query.nivel ? req.query.nivel : 1;
	try {
		var nivel = await CompresionLectoraService.getNivel(nivel);
		return res.status(200).json({
			status: 200,
			data: nivel,
			message: "Nivel recuperado exitosamente",
		});
	} catch (e) {
		return res.status(400).json({ status: 400, message: e.message });
	}
};
