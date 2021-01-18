// Core
import express from 'express';

// Controllers
import { getPosts, createPost } from '../controllers/posts.js';

// Routes
const router = express.Router();
router.get('/', getPosts);
router.post('/', createPost);

export default router;
