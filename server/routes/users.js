// Core
import express from 'express';
// Controllers
import { signIn, signUp } from '../controllers/users.js';

// Routes
const router = express.Router();
router.post('/signin', signIn);
router.post('/signup', signUp);

export default router;
