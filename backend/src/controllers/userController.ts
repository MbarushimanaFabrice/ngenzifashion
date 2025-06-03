// src/controllers/userController.ts
import { Request, Response } from 'express';
import { User, Post } from '../models';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { username, email, password, firstName, lastName } = req.body;
    
    const user = await User.create({
      username,
      email,
      password,
      firstName,
      lastName,
    });

    res.status(201).json({
      success: true,
      data: user,
      message: 'User created successfully',
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          as: 'posts',
          attributes: ['id', 'title', 'published', 'createdAt'],
        },
      ],
    });

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
      include: [
        {
          model: Post,
          as: 'posts',
        },
      ],
    });

    if (!user) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { username, email, firstName, lastName } = req.body;

    const [updatedRowsCount] = await User.update(
      { username, email, firstName, lastName },
      { where: { id } }
    );

    if (updatedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found or no changes made',
      });
      return;
    }

    const updatedUser = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    res.status(200).json({
      success: true,
      data: updatedUser,
      message: 'User updated successfully',
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedRowsCount = await User.destroy({
      where: { id },
    });

    if (deletedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'User not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};