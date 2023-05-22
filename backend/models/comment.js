//import mongoose module
const mongoose=require("mongoose")
//Schema
const commentSchema=mongoose.Schema({
    content: String,
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    matchId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Match"
    }
   
  
});
//Model name (collection "comments" will be created)
const comment =mongoose.model("Comment",commentSchema);
//make file exportable

module.exports=comment;