// Core
import React, { useState } from 'react';
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
// Styles
import useStyles from './styles';

const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const isSignUp = true;

    const handleShowPassword = () =>
        setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = () => {};
    const handleChange = () => {};

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
                                    name="secondName"
                                    label="Second Name"
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
                </form>
            </Paper>
        </Container>
    );
};

export default Auth;
