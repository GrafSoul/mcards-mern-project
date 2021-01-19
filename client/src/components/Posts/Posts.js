// Core
import React from 'react';
// Components
import Post from './Post/Post';
// Styles
import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
    );
};

export default Posts;
