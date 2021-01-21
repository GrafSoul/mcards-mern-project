// Core
import express from 'express';

// Controllers
import {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
} from '../controllers/posts.js';

// Routes
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
