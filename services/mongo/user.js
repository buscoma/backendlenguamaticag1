var User = require('../../models/mongo/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

exports.getUsers = async function () {
    try {
        var Users = await User.find()
        return Users;
    } catch (e) {
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function (user) {
    var hashedPassword = bcrypt.hashSync(user.password, 10);
    var newUser = new User({
        name: user.name,
        email: user.email,
        date: new Date(),
        password: hashedPassword
    })
    try {
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.APP_JWT_SECRET, {
            expiresIn: '24h'
        });
        return token;
    } catch (e) {
        console.log(e)    
        throw Error("Error while Creating User")
    }
}

exports.updateUser = async function (user) {
    var id = user.id
    try {
        var oldUser = await User.findById(id);
    } catch (e) {
        throw Error("Error occured while Finding the User")
    }
    if (!oldUser) {
        return false;
    }
    var hashedPassword = bcrypt.hashSync(user.password, 10);
    oldUser.name = user.name
    oldUser.email = user.email
    oldUser.password = hashedPassword
    try {
        var savedUser = await oldUser.save()
        return savedUser;
    } catch (e) {
        throw Error("And Error occured while updating the User");
    }
}

exports.deleteUser = async function (id) {
    try {
        var deleted = await User.remove({
            _id: id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("User Could not be deleted")
        }
        return deleted;
    } catch (e) {
        throw Error("Error Occured while Deleting the User")
    }
}


exports.loginUser = async function (user) {
    try {
        var _details;
        if (user.email) {
            _details = await User.findOne({
                email: user.email
            });
        }  else {
            _details = await User.findOne({
                name: user.name
            });
        }
        if (_details) {
            var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
            if (!passwordIsValid) throw Error("Invalid password")
            var token = jwt.sign({
                id: _details._id
            }, process.env.APP_JWT_SECRET, {
                expiresIn: '24h'
            });
            return token;
        } else {
            throw Error("Invalid name/email or password")
        }
    } catch (e) {
        throw Error(e.message)
    }

}