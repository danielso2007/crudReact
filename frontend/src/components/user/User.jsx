import './User.css';
import React, { Component } from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir.'
}

class User extends Component {
    render() {
        return (
            <Main {..headerProps}>
                Cadastro de Usuários
            </Main>
        );
    }
}

export default User;
