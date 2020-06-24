var jwt = require("jsonwebtoken");
var jwtP = require("./authenticateJWT");

exports.authenticateJWTRefresh = function (req, res, _) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
        const token = authHeader.split(" ")[1];
        secret = process.env.PLAYER_JWT_SECRET_REFRESH
		jwt.verify(token, secret, function (err, player) {
			if (err) {
				return res.sendStatus(403);
			}
			let token = jwtP.playerJWT(player)
			return  res.status(200).json({token: token})
		});
	} else {
		res.sendStatus(401);
	}
};

exports.playerJWTRefresh = function (player) {
	return jwt.sign(
		{
			id: player.id,
		},
		process.env.PLAYER_JWT_SECRET_REFRESH,
		{
			expiresIn: "24h",
		}
	)
};
