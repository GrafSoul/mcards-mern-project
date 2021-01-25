// Core
import React, { useState, useEffect } from 'react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import { getPosts } from './store/actions/posts';
// Material UI
import { Container, Grow, Grid } from '@material-ui/core';
// Components
import Navbar from './components/Navbar/Navbar.js';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
// Styles
import './index.css';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
        <Container maxWidth="lg">
            <Navbar />
            <Grow in>
                <Container>
                    <Grid
                        container
                        className={classes.mainContainer}
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
