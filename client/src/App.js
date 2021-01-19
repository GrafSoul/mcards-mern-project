// Core
import React, { useEffect } from 'react';
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
import useStyles from './styles';
// Images
import memories from './components/images/memories.png';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

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
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
};

export default App;
