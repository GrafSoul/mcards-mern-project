// Module
import PostMessage from '../modules/postMessage.js';

// Controller getPosts
export const getPosts = async (req, res) => {
    // res.send('THIS WORKS!');
    try {
        const postMessage = await PostMessage.find();

        // console.log(postMessage);

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

// Controller createPost
export const createPost = async (req, res) => {
    // res.send('POST CREATION!');
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
