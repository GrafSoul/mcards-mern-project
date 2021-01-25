// Core
import React, { useState, useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
// Actions
import { getPosts } from '../../store/actions/posts';
// Material UI
import { Container, Grow, Grid } from '@material-ui/core';
// Components
import Posts from '../Posts/Posts';
import Form from '../Form/Form.js';
// Styles
import useStyles from './styles';

const Home = () => {
    const classes = useStyles();
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
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
    );
};

export default Home;
