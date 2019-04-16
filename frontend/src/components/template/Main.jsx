import './Main.css';
import React, { Component, Fragment } from 'react';

import Header from './Header';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props} />
                <main className='content'>
                    Conteúdo
                </main>
            </Fragment>
        );
    }
}

export default Main;
