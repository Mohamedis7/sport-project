//import mongoose module
const mongoose=require("mongoose")
//Schema
const playerSchema=mongoose.Schema({
    Name: String,
    position: String,
    NBR:String,
    Age:String
    
    
});
//Model name (collection "matches" will be created)
const player =mongoose.model("Player",playerSchema);
//make file exportable

module.exports=player;