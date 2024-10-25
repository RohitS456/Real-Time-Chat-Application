import mongoose from "mongoose";


const messSchema=new mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true,
    },
    receiverId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",
        required:true,
    },
    message:{
        type:String,
        required:true,
    }
    //time created and automatically updated..
},{timestamps:true});

const Message=mongoose.model("Message",messSchema);
export default Message;