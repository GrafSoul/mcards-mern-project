// Core
import express from 'express';
// Controllers
import { signIn, signUp } from '../controllers/users.js';

// Routes
const userRoutes = express.Router();
userRoutes.post('/signin', signIn);
userRoutes.post('/signup', signUp);

export default userRoutes;
