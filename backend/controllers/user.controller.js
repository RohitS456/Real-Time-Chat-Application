import UserModel from "../models/user.model.js";

export const getUsersForSidebar= async (req,res)=>{
    try{
        const loggedInUserID=req.user._id;
         const filterUser=await UserModel.find({_id: { $ne: loggedInUserID}});

         res.status(200).json(filterUser);

    }catch(error){
        console.log("Error is coming in UserLoggedIn :", error.message);
        res.status(500).json({error:"Internal server error !"});
    }
}