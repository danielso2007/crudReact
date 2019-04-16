import './Footer.css';
import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <span>
                    Desenvolvimento com <i className='fa fa-heart text-danger'></i> por <strong> Cod<span className='text-danger'>3</span>r</strong>
                </span>
            </footer>
        );
    }
}

export default Footer;
