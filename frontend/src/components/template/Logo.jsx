import './Logo.css';
import React, { Component } from 'react';

import logo from '../../assets/images/logo.png';

class Logo extends Component {
    render() {
        return (
            <aside className='logo'>
                <a href='/' className='logo'>
                    <img src={logo} alt='Logo' />
                </a>
            </aside>
        );
    }
}

export default Logo;
