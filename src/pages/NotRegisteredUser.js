import React, { Fragment } from 'react';
// Importando Contexto
import Context from '../Context';
// Importando componente UserForm
import { UserForm } from '../components/UserForm';
// Importando container RegisterMutation
import { RegisterMutation } from '../container/RegisterMutation';
// Importando container LoginMutation
import {LoginMutation} from '../container/LoginMutation';

export const NotRegisteredUser = () => {
  return (
    <Context.Consumer>
      {
        // Accediendo a las render props que declaremos en el Provider
        ({activateAuth}) => {
          return (
            <Fragment>
              <Registro activateAuth={activateAuth}/>
              <Login activateAuth={activateAuth}/>
            </Fragment>
          );
        }
      }
    </Context.Consumer>
  );
};

const Registro=({activateAuth})=>{
  const {registerMutation, error, loading}=RegisterMutation();
  
  // Obtenemos los props desdel el handleSubmit del UserForm
  const onSubmit = ({ email, password}) => {
    const input = { email, password };
    const variables = { input };

    // Una vez el registro vaya bien, ejecutamos el activateAuth para autentificar al usuario
    registerMutation({ variables })
      .then(activateAuth);
  };

  // Si hay un error se crea el mensaje
  const errorMsg= error && 'El usuario ya existe o hay algún problema.'

  return(
    <UserForm disabled={loading} error={errorMsg} title={"Registrarse"} onSubmit={onSubmit} />
  )
}

const Login=({activateAuth})=>{
  const {loginMutation, error, loading}=LoginMutation();

  // Obtenemos los valores desdel el handleSubmit del UserForm
  const onSubmit = ({ email, password }) => {
    const input = { email, password };
    const variables = { input };

    // Una vez el registro vaya bien, ejecutamos el activateAuth para autentificar al usuario
    loginMutation({ variables })
      .then(activateAuth);
  };

  // Si hay un error se crea el mensaje
  const errorMsg= error && 'El usuario no existe o la contraseña es incorrecta.'

  return(
    <UserForm disabled={loading} error={errorMsg} title={"Iniciar Sesión"} onSubmit={onSubmit} />
  )
}
