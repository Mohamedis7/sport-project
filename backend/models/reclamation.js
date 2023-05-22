//import mongoose module
const mongoose = require("mongoose")

var uniqueValidator = require('mongoose-unique-validator');
//Schema
const reclamationSchema = mongoose.Schema({
   subject:String,
   description:String,
   userId:String

});
// Apply the uniqueValidator plugin to userSchema.
reclamationSchema.plugin(uniqueValidator);

//Model name (collection "matches" will be created)
const reclamation = mongoose.model("Reclamation", reclamationSchema);
//make file exportable

module.exports = reclamation;