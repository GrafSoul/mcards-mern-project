// Core
import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Post from './Post/Post';
// Styles
// import useStyles from './styles';

const Posts = () => {
    // const classes = useStyles();
    const posts = useSelector((state) => state.posts);
    console.log(posts);

    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
};

export default Posts;
