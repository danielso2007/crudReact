import './Main.css';
import React, { Component, Fragment } from 'react';

import Header from './Header';

class Main extends Component {
    render() {
        return (
            <Fragment>
                <Header {...this.props} />
                <main className='container container-fluir'>
                    <div className='p-3 mt-3'>
                        { this.props.children }
                    </div>
                </main>
            </Fragment>
        );
    }
}

export default Main;
