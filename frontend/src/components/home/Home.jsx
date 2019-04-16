import './Home.css';
import React, { Component } from 'react';
import Main from '../template/Main';

class Footer extends Component {
    render() {
        return (
            <Main icon='home' title='Início' subtitle='Segundo Projeto do Capítulo de React.'>
                <div className='display-4'>Bem vindo!</div>
                <hr/>
                <p className='mb-0'>Sistema para exemplificar a construção de um cadastro desenvolvido em react.</p>
            </Main>
        );
    }
}

export default Footer;
