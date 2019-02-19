let models = require('../db/models');
let validator = require('validator');

function validateCreateUserFields(errors, req) {
    if (!validator.isEmail(req.body.email)) {
        errors['email'] = "Email format is invalid.";
    }

    if (!validator.isAscii(req.body.password)) {
        errors['password'] = "Invalid characters in password. Please be sure your password meets the requirements.";
    }

    if (!validator.isLength(req.body.password, {min: 8, max: 25})) {
        errors['password'] = "Please create a password between 8 and 25 characters long."
    }
}

exports.validateUser = function(errors, req) {
    return new Promise(function(resolve, reject) {
        validateCreateUserFields(errors, req);
        return models.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user !== null) {
                errors['email'] = "Email already taken by another user.";
            }
            resolve(errors);
        })
    })
}