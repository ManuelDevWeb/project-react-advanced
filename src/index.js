// Importando elementos de React
import React from 'react';
import ReactDOM from 'react-dom';
// Importando componentes de Apollo
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// Importando componente App
import { App } from './App';

// Inicializando cliente de Apollo
const client=new ApolloClient({
    // Url del backend desplegada en vercel
    uri: 'https://backend-app-animales-insta.vercel.app/graphql',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app')
)