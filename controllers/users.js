var UserService = require('../services/mongo/user');

exports.getUsers = async function (_, res, _) {
    try {
        var Users = await UserService.getUsers()
        return res.status(200).json({data: Users, message: "Users list"});
    } catch (e) {
        return res.status(400).json({message: e.message});
    }
}

exports.createUser = async function (req, res, _) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({message: "Must specify name, email, password in body"})
    }
    var User = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    try {
        var createdUser = await UserService.createUser(User)
        return res.status(201).json({token: createdUser, message: "User created"})
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: e.message})
    }
}

exports.updateUser = async function (req, res, _) {
    if (!req.body._id) {
        return res.status(400).json({message: "User _id must be specified"})
    }
    var id = req.body._id;
    var User = {
        id,
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        password: req.body.password ? req.body.password : null
    }
    try {
        var updatedUser = await UserService.updateUser(User)
        return res.status(200).json({data: updatedUser, message: "User updated"})
    } catch (e) {
        return res.status(400).json({message: e.message})
    }
}

exports.removeUser = async function (req, res, _) {
    var id = req.params.id;
    try {
        var _ = await UserService.deleteUser(id);
        res.status(200).send("Deleted");
    } catch (e) {
        return res.status(400).json({message: e.message})
    }
}


exports.loginUser = async function (req, res, _) {
    if (!req.body.password || (!req.body.email && !req.body.name)) {
        return res.status(400).json({message: "Must specify name or email and password"})
    }
    var User = {
        name: req.body.name ? req.body.name : null,
        email: req.body.email ? req.body.email : null,
        password: req.body.password,
    }
    try {
        var jwtToken = await UserService.loginUser(User);
        return res.status(200).json({token: jwtToken, message: "Success"})
    } catch (e) {
        return res.status(401).json({message: e.message})
    }
}