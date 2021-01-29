/* eslint-disable react-hooks/exhaustive-deps */
// Core
import React, { useState, useEffect } from 'react';
// Router
import { Link, useHistory, useLocation } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import * as actionType from '../../store/actions/types';
// JWT
import decode from 'jwt-decode';
// Material UI
import { AppBar, Avatar, Typography, Button, Toolbar } from '@material-ui/core';
// Styles
import useStyles from './styles';
// Images
import memories from '../images/memories.png';

const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('profile')),
    );

    const handleLogOut = () => {
        dispatch({ type: actionType.LOGOUT });
        history.push('/');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;

        if (token) {
            const decodedToken = decode(token);

            if (decodedToken.exp * 1000 < new Date().getTime()) handleLogOut();
        }

        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography
                    component={Link}
                    to="/"
                    className={classes.heading}
                    variant="h2"
                    align="center"
                >
                    MCards
                </Typography>
                <img
                    className={classes.image}
                    src={memories}
                    alt="Memories"
                    height={60}
                />
            </div>
            <Toolbar className={classes.toolbar}>
                {user?.result ? (
                    <div className={classes.profile}>
                        <Avatar
                            className={classes.image}
                            alt={user?.result.name}
                            src={user?.result.imageUrl}
                        >
                            {user?.result.name.charAt(0)}
                        </Avatar>
                        <Typography className={classes.userName} variant="h6">
                            {user?.result.name}
                        </Typography>
                        <Button
                            variant="contained"
                            className={classes.logout}
                            color="secondary"
                            onClick={handleLogOut}
                        >
                            Logout
                        </Button>
                    </div>
                ) : (
                    <Button
                        component={Link}
                        to="/auth"
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
