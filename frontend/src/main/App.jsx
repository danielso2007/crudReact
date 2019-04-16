import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import React, { Component } from 'react';

import Logo from '../components/template/Logo';
import Nav from '../components/template/Nav';
import Home from '../components/home/Home';
import Footer from '../components/template/Footer';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Logo />
                <Nav />
                <Home/>
                <Footer />
            </div>
        );
    }
}

export default App;
