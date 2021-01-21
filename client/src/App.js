// Core
import React, { useState, useEffect } from 'react';
// Material UI
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import { getPosts } from './store/actions/posts';
// Components
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
// Styles
import './index.css';
import useStyles from './styles';
// Images
import memories from './components/images/memories.png';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    Memories
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="Memories"
                    height={60}
                />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid
                        container
                        justify="space-between"
                        alignItems="stretch"
                        spacing={3}
                    >
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form
                                currentId={currentId}
                                setCurrentId={setCurrentId}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
