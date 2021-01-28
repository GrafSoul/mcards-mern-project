// Core
import React, { useState } from 'react';
// Router
import { useHistory } from 'react-router-dom';
// Redux
import { useDispatch } from 'react-redux';
import { signUp, signIn } from '../../store/actions/auth';
// Google API
import { GoogleLogin } from 'react-google-login';
// Material UI
import {
    Avatar,
    Button,
    Paper,
    Typography,
    Container,
    Grid,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// Components
import Input from './Input';
import Icon from './Icon';
// Styles
import useStyles from './styles';
// Environment
import dotenv from 'dotenv';
dotenv.config();

const initialSate = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

const Auth = () => {
    const classes = useStyles();
    const history = useHistory();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [formData, setFormData] = useState(initialSate);
    const dispatch = useDispatch();

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSwitchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp);
        setShowPassword(false);
    };

    const handleGoogleSuccess = async (res) => {
        const result = await res?.profileObj; // undefined
        const token = await res?.tokenId; // undefined
        console.log(result);
        console.log(token);

        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    const handleGoogleFailure = (error) => {
        console.log('Google Sign In was unsuccessful. Try again later!');
        console.log('Error: ', error);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            dispatch(signUp(formData, history));
        } else {
            dispatch(signIn(formData, history));
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">
                    {isSignUp ? 'Sign Up' : 'Sign In'}
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input
                                    name="firstName"
                                    label="First Name"
                                    handleChange={handleChange}
                                    autoFocus
                                    half
                                />

                                <Input
                                    name="lastName"
                                    label="Last Name"
                                    handleChange={handleChange}
                                    half
                                />
                            </>
                        )}
                        <Input
                            name="email"
                            label="Email Address"
                            type="email"
                            handleChange={handleChange}
                        />
                        <Input
                            name="password"
                            label="Password"
                            type={showPassword ? 'text' : 'password'}
                            handleShowPassword={handleShowPassword}
                            handleChange={handleChange}
                        />
                        {isSignUp && (
                            <Input
                                name="confirmPassword"
                                label="Repeat Password"
                                type="password"
                                handleChange={handleChange}
                            />
                        )}
                    </Grid>
                    <Button
                        className={classes.submit}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_ID}
                        onFailure={handleGoogleFailure}
                        onSuccess={handleGoogleSuccess}
                        cookiePolicy="single_host_origin"
                        render={(renderProps) => (
                            <Button
                                className={classes.googleButton}
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                startIcon={<Icon />}
                            >
                                {isSignUp
                                    ? 'Google Sign Up '
                                    : 'Google Sign In'}
                            </Button>
                        )}
                    />
                    <Grid container justify="center">
                        <Grid item>
                            <Button onClick={handleSwitchMode}>
                                {isSignUp
                                    ? 'Already have an account? Sign In'
                                    : "Don't have an account? Sign Up"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
