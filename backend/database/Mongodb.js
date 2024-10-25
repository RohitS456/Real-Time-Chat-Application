import mongoose from "mongoose";

const mongodbCoonection = async()=>{
    try{
       await mongoose.connect(process.env.Mongdb_url);
       console.log("Scussesfully connect to database!");
    }catch(error){
        console.log("error in the connection ",error.message);
    }
}
export default mongodbCoonection;