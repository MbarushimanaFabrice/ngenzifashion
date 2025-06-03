
// src/controllers/postController.ts
import { Request, Response } from 'express';
import { Post, User } from '../models';

export const createPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, content, userId, published } = req.body;
    
    const post = await Post.create({
      title,
      content,
      userId,
      published,
    });

    res.status(201).json({
      success: true,
      data: post,
      message: 'Post created successfully',
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPostById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    
    const post = await Post.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
    });

    if (!post) {
      res.status(404).json({
        success: false,
        message: 'Post not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      data: post,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPostsByUserId = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    
    const posts = await Post.findAll({
      where: { userId },
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
      order: [['createdAt', 'DESC']],
    });

    res.status(200).json({
      success: true,
      data: posts,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updatePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, content, published } = req.body;

    const [updatedRowsCount] = await Post.update(
      { title, content, published },
      { where: { id } }
    );

    if (updatedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Post not found or no changes made',
      });
      return;
    }

    const updatedPost = await Post.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['id', 'username', 'firstName', 'lastName'],
        },
      ],
    });

    res.status(200).json({
      success: true,
      data: updatedPost,
      message: 'Post updated successfully',
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedRowsCount = await Post.destroy({
      where: { id },
    });

    if (deletedRowsCount === 0) {
      res.status(404).json({
        success: false,
        message: 'Post not found',
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: 'Post deleted successfully',
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};