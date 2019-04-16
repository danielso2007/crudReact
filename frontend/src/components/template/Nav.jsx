import './Nav.css';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <aside className='menu-area'>
                <nav className='menu'>
                    <NavLink to='/home' activeClassName='active'><i className='fa fa-home'> Início</i></NavLink>
                    <NavLink to='/users' activeClassName='active'><i className='fa fa-users'> Usuários</i></NavLink>
                </nav>
            </aside>
        );
    }
}

export default Nav;
