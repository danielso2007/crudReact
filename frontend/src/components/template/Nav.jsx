import './Nav.css';
import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <aside className='menu-area'>
                <nav className='menu'>
                    <a href='#/' className='active'><i className='fa fa-home'> Início</i></a>
                    <a href='#/users'><i className='fa fa-users'> Usuários</i></a>
                </nav>
            </aside>
        );
    }
}

export default Nav;
