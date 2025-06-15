import { Request, Response } from "express";
import { User } from "../models";

export const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const {email,password_hash}=req.body;

  } catch (error: any) {
    res.status(400).json({
      sucess: false,
      message: error.message
    });
  }
};
