// Core
import React from 'react';
// Material UI
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
// Material Icons
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

function Input({
    type,
    name,
    label,
    half,
    handleChange,
    autoFocus,
    handleShowPassword,
}) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <TextField
                name={name}
                label={label}
                autoFocus={autoFocus}
                type={type}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                InputProps={
                    name === 'password' && {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleShowPassword}>
                                    {type === 'password' ? (
                                        <Visibility />
                                    ) : (
                                        <VisibilityOff />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }
                }
            />
        </Grid>
    );
}

export default Input;
