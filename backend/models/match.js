//import mongoose module
const mongoose=require("mongoose")
//Schema
const matchSchema=mongoose.Schema({
    scoreOne: Number,
    scoreTwo: Number,
    teamOne:String,
    teamTwo:String,
});
//Model name (collection "matches" will be created)
const match =mongoose.model("Match",matchSchema);
//make file exportable

module.exports=match;