// src/routes/postRoutes.ts
import { Router } from 'express';
import {
  createPost,
  getAllPosts,
  getPostById,
  getPostsByUserId,
  updatePost,
  deletePost,
} from '../controllers/postController';

const router = Router();

router.post('/', createPost);
router.get('/', getAllPosts);
router.get('/:id', getPostById);
router.get('/user/:userId', getPostsByUserId);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;