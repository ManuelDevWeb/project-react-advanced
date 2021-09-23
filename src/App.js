// Importando React
import React from 'react';
// Importando container PhotoCardGetSinglePhoto
import { PhotoCardGetSinglePhoto } from './container/PhotoCardGetSinglePhoto';
// Importando page Home
import { Home } from './pages/Home';
// Importando componente Logo
import {Logo} from './components/Logo';
// Importando estilos globales
import { GlobalStyle } from './styles/GlobalStyles';
// Importando elementos de reachRouter
import {Router} from '@reach/router';

export const App = () => {
  // Almacenando los parametros de la URL
  const urlParams=new window.URLSearchParams(window.location.search);
  // Almacenando el valor del detailId de la URL
  const detailId=urlParams.get('detail');
  // console.log(detailId);

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {
        detailId 
        ? <PhotoCardGetSinglePhoto id={detailId}/>
        : 
        // Rutas de nuestra aplicación
        <Router>
          <Home path='/'/>
          <Home path='/pet/:categoryId'/>
        </Router>
      }
      
    </div>
  )
} 

