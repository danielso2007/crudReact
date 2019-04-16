import './Logo.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.png';

class Logo extends Component {
    render() {
        return (
            <aside className='logo'>
                <Link to='/home' className='logo'>
                    <img src={logo} alt='Logo' />
                </Link>
            </aside>
        );
    }
}

export default Logo;
