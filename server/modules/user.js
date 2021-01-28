// Core
import mongoose from 'mongoose';

// Mongoose Schema
const userSchema = mongoose.Schema({
    id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export default mongoose.model('User', userSchema);
