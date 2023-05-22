//import mongoose module
const mongoose=require("mongoose")
//Schema
const teamSchema=mongoose.Schema({
    Name: String,
    owner: String,
    foundation:String,
    stadium:Number
    
});
//Model name (collection "matches" will be created)
const team =mongoose.model("Team",teamSchema);
//make file exportable

module.exports=team;