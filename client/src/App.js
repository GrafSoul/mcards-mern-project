// Core
import React from 'react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Material UI
import { Container } from '@material-ui/core';
// Components
import Navbar from './components/Navbar/Navbar.js';
import Auth from './components/Auth/Auth.js';
import Home from './components/Home/Home.js';
// Styles
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/auth" component={Auth} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
};

export default App;
