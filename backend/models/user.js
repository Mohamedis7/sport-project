//import mongoose module
const mongoose = require("mongoose")

var uniqueValidator = require('mongoose-unique-validator');
//Schema
const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    pwd: String,
    role: String,
    tel: Number,
    img: String,

});
// Apply the uniqueValidator plugin to userSchema.
userSchema.plugin(uniqueValidator);

//Model name (collection "matches" will be created)
const user = mongoose.model("User", userSchema);
//make file exportable

module.exports = user;