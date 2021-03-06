const mongoose = require("mongoose");
const moment = require("moment");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    consumer: {
        type: Boolean,
        default: true
    },

    username: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },

    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },

    companyName: {
        type: String,
        trim: true,
    },


    businessType: {
        type: String,
        trim: true,

    },

    address: {
        type: String,
        trim: true,

    },
    city: {
        type: String,
        trim: true,

    },
    state: {
        type: String,
        trim: true,

    },
    zip: {
        type: String,
        trim: true,

    },
    dineIn: {
        type: Boolean,
        default: false

    },

    tables: {
        type: Number,
        min: 1
    },

    outsideDining: {
        type: Boolean,
        default: false
    },


    takeOut: {
        type: Boolean,
        default: false

    },

    driveThru: {
        type: Boolean,
        default: false

    },


    masks: {
        type: Boolean,
        default: false

    },
    open: {
        type: Boolean,
        default: false
    },
    curbside: {
        type: Boolean,
        default: false
    },

    userCreated: {
        type: String,
        default: moment().format('MMMM Do YYYY')
    }

});

UserSchema.methods.validPassword = function(password) {
    return password === this.password;
}

const User = mongoose.model("profile", UserSchema);

module.exports = User;