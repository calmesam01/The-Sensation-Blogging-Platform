const mongoose = require('mongoose')
const crypto = require('crypto')

//Create user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true,
        index: true,
        lowercase: true
    },
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true
    },
    profile: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: String,
    about: {
        type: String
    },
    role: {
        type: Number,
        trim: true
    },
    photo: {
        data: Buffer,
        contentType: String
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, {timestamps: true})

//User schema virtual fields and methods for password hashing
userSchema
    .virtual('password')
    .set(function (password) {
        //Create a temporary variable called _password
        this._password = password
        //Generate salt
        this.salt = this.makeSalt()
        //Encrypt password
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function () {
        return this._password
    })

    userSchema.methods = {
        //Return true if both the passwords match
        authenticate: function (plainText) {
            return this.encryptPassword(plainText) === this.hashed_password
        },
        //Encrypt the password using sha1 algorithm and salt (from makeSalt method) as the key
        encryptPassword: function (password) {
            if (!password) {
                return '';
            }
            try {
                return crypto
                            .createHmac('sha1', this.salt)
                            .update(password)
                            .digest('hex');
            } catch (error) {
                return error;
            }
        },

        //generate salt
        makeSalt: function () {
            return Math.round(new Date().valueOf() * Math.random()) + '';
        }
    }

module.exports = mongoose.model('User', userSchema)