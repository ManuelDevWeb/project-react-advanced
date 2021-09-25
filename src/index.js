// Importando elementos de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importando componentes de Apollo
import { ApolloClient, ApolloProvider, InMemoryCache, ApolloLink, from, HttpLink } from "@apollo/client";
import {onError} from '@apollo/client/link/error';
// Importando Context
import Context from './Context';
// Importando componente App
import { App } from './App';

/*
    Un Middleware es un bloque de código que se ejecuta entre la petición que hace el
    usuario (request) hasta que la petición llega al servidor. Un middleware se define
    por defecto con una función
*/

// Middleware para autentificar usuario a través del token
const authMiddleware=new ApolloLink((operation, next)=>{
    // Recuperando el token del session
    const token=window.sessionStorage.getItem('token');

    // Validando que exista un token
    if(token){
        // Esta propiedad se ejecuta justo antes de hacer cualquier petición al servidor
        operation.setContext({
            headers:{
                authorization: `Bearer ${token}`
            }
        })
    }

    return next(operation);
})

// Middleware para manejar la expiración del token
const errorMiddleware=onError(
    ({networkError})=>{
        if(networkError && networkError.result.code==='invalid_token'){
            // Removiendo token del storage
            sessionStorage.removeItem('token');
            // Redireccionando a la ruta /user
            window.location='/user';
        }
    }
)


// Inicializando cliente de Apollo
const client=new ApolloClient({
    cache: new InMemoryCache(),
    link: from([
        errorMiddleware,
        authMiddleware,
        new HttpLink({
            // Url del backend desplegada en vercel
            uri: 'https://backend-app-animales-insta.vercel.app/graphql'
        })
    ]) 
});

ReactDOM.render(
    <Context.Provider>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </Context.Provider>,
    document.getElementById('app')
)