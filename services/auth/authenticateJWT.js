let jwt = require("jsonwebtoken");

let authenticateJWT = function (req, res, next) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.PLAYER_JWT_SECRET, (err, player) => {
			if (err) {
				return res.sendStatus(403);
			}
			req.player = player;
			next();
		});
	} else {
		res.sendStatus(401);
	}
};

let playerJWT = function (player) {
	return jwt.sign(
		{
			id: player.id,
		},
		process.env.PLAYER_JWT_SECRET,
		{
			expiresIn: "1h",
		}
	);
};

module.exports = { authenticateJWT, playerJWT };
