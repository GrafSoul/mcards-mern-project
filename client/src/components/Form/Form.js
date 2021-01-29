// Core
import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../store/actions/posts';
// Material UI
import { TextField, Button, Typography, Paper } from '@material-ui/core';
// File Base64
import FileBase from 'react-file-base64';
// Styles
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        title: '',
        message: '',
        tags: '',
        selectedFile: '',
    });
    const post = useSelector((state) =>
        currentId ? state.posts.find((post) => post._id === currentId) : null,
    );
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (currentId) {
            dispatch(
                updatePost(currentId, {
                    ...postData,
                    name: user?.result?.name,
                }),
            );
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }));
        }
        handleClear();
    };

    const handleClear = () => {
        setCurrentId(null);
        setPostData({
            title: '',
            message: '',
            tags: '',
            selectedFile: '',
        });
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own cards and like other's
                    cards.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">
                    {currentId ? 'Editing' : 'Creating'} a Memory
                </Typography>
                <TextField
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth
                    className={classes.fileInput}
                    value={postData.title}
                    onChange={(e) =>
                        setPostData({ ...postData, title: e.target.value })
                    }
                />
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    multiline
                    fullWidth
                    className={classes.fileInput}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth
                    className={classes.fileInput}
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value.split(','),
                        })
                    }
                />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={(base64) => {
                            setPostData({
                                ...postData,
                                selectedFile: base64.base64,
                            });
                        }}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    size="small"
                    onClick={handleClear}
                >
                    Clear
                </Button>
            </form>
        </Paper>
    );
};

export default Form;
