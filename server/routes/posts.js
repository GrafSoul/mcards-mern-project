// Core
import express from 'express';

// Controllers
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

// Routes
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
