import {Request,Response} from "express";
import { User } from "../models";
// create user
export const createUser= async(req:Request,res:Response):Promise<void>=>{
  try{
    const {username,email,password_hash,first_name,last_name,phone,user_type}=req.body;
    
    const user=await User.create({username,email,password_hash,first_name,last_name,phone,user_type});
    res.status(201).json({
      success:true,
      data:user,
      message:"User created successfully"
    });

 
  }
  catch(error:any){
    res.status(400).json({
      success:false,
      message:error.message
    });
  }
}

// get all users

export const getAllUsers=async(req:Request,res:Response):Promise<void>=>{
  try{
    const users=await User.findAll({
      attributes:{exclude:['password_hash']}
    })
    res.status(201).json({
      success:true,
      data:users
    })
  }
  catch(error:any){
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
}

// get user by id

export const getUserById=async(req:Request,res:Response):Promise<void>=>{
  try{
    const {user_id}=req.params;
    const user=await User.findByPk(user_id,{
      attributes:{exclude:['password_hash']}
    })
    res.status(201).json({
      success:true,
      data:user
    })
  }
  catch(error:any){
    res.status(401).json({
      ssuccess:false,
      message:error.message
    })
  }
}

// Update user

export const updateUser=async(req:Request,res:Response):Promise<void>=>{
  try{
    const {user_id}=req.params;
    const {username,email,first_name,last_name,phone}=req.body;
    const [updateRowCount]=await User.update({
      username,email,first_name,last_name,phone   
    },{where:{user_id}});
    if(updateRowCount===0){
      res.status(404).json({
        success:false,
        message:"User not found"
      });
      return;
    }
    const updatedUser=await User.findByPk(user_id,{
      attributes:{exclude:['password']},
    })
    res.status(200).json({
      success:true,
      updated_at:updatedUser,
      message:"User updated successfully"
    })
 
  }
  catch(error:any){
    res.status(400).json({
      ssuccess:false,
      message:error.message
    })
  }
}

// delete user

export const deleteUser=async(req:Request,res:Response):Promise<void>=>{
  try{
    const {user_id}=req.params;
    const deletedRowsCount=await User.destroy({
      where:{user_id}
    });
    if(deletedRowsCount===0){
      res.status(404).json({
        sucess:false,
        message:"User not found"
      })  
    return;
    }
    res.status(201).json({
      success:true,
      message:"User deleted successfully"
    })
  }
  catch(error:any){ 
    res.status(400).json({
      success:false,
      message:error.message
    })
  }
}