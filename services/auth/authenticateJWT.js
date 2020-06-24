let jwt = require("jsonwebtoken");
let PlayerService = require("../player")

exports.authenticateJWT = function (req, res, next) {
	const authHeader = req.headers.authorization;
	if (authHeader) {
		const token = authHeader.split(" ")[1];
		let secret = process.env.PLAYER_JWT_SECRET
		jwt.verify(token, secret, async function (err, player) {
			if (err) {
				return res.sendStatus(403);
			}
			PlayerService.PlayerLastToken(player).then(
				playerLastToken => {
					if (playerLastToken == token){
						req.player = player;
						next();
					}else {
						res.sendStatus(401);
					}
				}
			)
		});
	}else {
		res.sendStatus(401);
	}
};

exports.playerJWT = function (player) {
	return jwt.sign(
		{
			id: player.id,
		},
		process.env.PLAYER_JWT_SECRET,
		{
			expiresIn: 30,
		}
	);
};
