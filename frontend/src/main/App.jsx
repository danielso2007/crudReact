import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Footer from '../components/template/Footer';

import { HashRouter } from "react-router-dom";
import Routes from './routes';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className='app'>
                    <Logo />
                    <Nav />
                    <Routes />
                    <Footer />
                </div>
            </HashRouter>
        );
    }
}

export default App;
