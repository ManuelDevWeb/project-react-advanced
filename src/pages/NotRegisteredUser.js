import React, { Fragment } from 'react';
// Importando Contexto
import Context from '../Context';
// Importando componente UserForm
import { UserForm } from '../components/UserForm';

export const NotRegisteredUser = () => (
  <Context.Consumer>
    {
        // Accediendo a las render props que declaremos en el Provider
        ({ activateAuth }) => (
          <Fragment>
            <UserForm title={'Registrarse'} onSubmit={activateAuth}/>
            <UserForm title={'Iniciar Sesión'} onSubmit={activateAuth}/>
          </Fragment>
        )
    }
  </Context.Consumer>
);
