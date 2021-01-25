// Core
import React, { useState, useEffect } from 'react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Material UI
import { Container } from '@material-ui/core';
// Components
import Navbar from './components/Navbar/Navbar.js';
import Home from './components/Home/Home.js';

// Styles
import './index.css';

const App = () => {
    return (
        <Container maxWidth="lg">
            <Navbar />
            <Home />
        </Container>
    );
};

export default App;
