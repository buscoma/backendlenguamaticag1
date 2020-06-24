var jwt = require("jsonwebtoken");
var jwtP = require("./authenticateJWT");

exports.authenticateJWTRefresh = function (req, res, _) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
        const refreshToken = authHeader.split(" ")[1];
        secret = process.env.PLAYER_JWT_SECRET_REFRESH
		jwt.verify(refreshToken, secret, function (err, player) {
			if (err) {
				return res.sendStatus(403);
			}
			let new_token = jwtP.playerJWT(player)
			return  res.status(200).json({accessToken: new_token, refreshToken: refreshToken})
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
			expiresIn: "1h",
		}
	)
};
