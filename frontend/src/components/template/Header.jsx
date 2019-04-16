import './Header.css';
import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className='header d-none d-sm-flex flex-column'>
                <h1 className='mt-3'>
                    <i className={`fa fa-${this.props.icon}`} /> {this.props.title}
                </h1>
                <p className='lead text-muted'>{ this.props.subtitle }</p>
            </header>
        );
    }
}

export default Header;
