// Core
import axios from 'axios';
const baseURL =
    window.location.href === 'http://localhost:3000/auth'
        ? 'http://localhost:5000'
        : window.location.href;
const API = axios.create({ baseURL: baseURL });
// const API = axios.create({ baseURL: 'http://localhost:5000' });

// Posts
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
    API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);

// Auth
export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
