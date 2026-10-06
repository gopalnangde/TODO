import mongoose from "mongoose";

const listSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    isComplete:{
        type:Boolean,
        default:false
    }
})

const listModel = mongoose.model("list",listSchema);

export default listModel;