import UserModel from "../models/UserModel.js";


export const getUsers=async(req,res)=>{
  try {
   const users= await UserModel.find();
   res.status(200).json(users)
    
  } catch (error) {
     res.status(400).json({message:error.message})
  }   
}
// post users//
export const PostUser=async(req,res)=>{
    const info=new UserModel(req.body)
    try {
        const saveUser=await info.save();
        res.status(201).json(saveUser)
        
    } catch (error) {
     res.status(400).json({message:error.message})
        
    }
}
// get one user//
export const getOneUser=async(req,res)=>{
    try {
        const findone=await UserModel.findById(req.params.id);
        res.status(200).json(findone)
    } catch (error) {
     res.status(400).json({message:error.message})
        
    }
 }

//  update userInfo//
 export const UpdateUser=async(req,res)=>{
    try {
        const findandupdate=await UserModel.findOneAndUpdate({_id:req.params.id},
            {$set:req.body})
            res.json("کاربر ویرایش شد")
    } catch (error) {
     res.status(400).json({message:error.message})
        
    }
 }

//  delete user//
export const DeleteUser=async(req,res)=>{
    try {
        const findandeDelete=await UserModel.deleteOne({_id:req.params.id})
        res.json("کاربر حذف شد")

    } catch (error) {
     res.status(400).json({message:error.message})
        
    }
}