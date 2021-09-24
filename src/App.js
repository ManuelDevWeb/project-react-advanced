// Importando React
import React from 'react';
// Importando page Home
import { Home } from './pages/Home';
// Importando page Detail
import { Detail } from './pages/Detail';
// Importando page Favs
import { Favs } from './pages/Favs';
// Importando page NotRegisteredUser
import { NotRegisteredUser } from './pages/NotRegisteredUser';
// Importando page User
import { User } from './pages/User';
// Importando el Contexto
import Context from './Context';
// Importando componente Logo
import {Logo} from './components/Logo';
// Importando componente NavBar
import {NavBar} from './components/NavBar';
// Importando estilos globales
import { GlobalStyle } from './styles/GlobalStyles';
// Importando elementos de reachRouter
import {Router} from '@reach/router';


export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* Rutas de nuestra aplicación */}
      <Router>
          <Home path='/'/>
          <Home path='/pet/:categoryId'/>
          <Detail path='/detail/:detailId'/>
      </Router>
      <Context.Consumer>
        {
          // Accediendo a las render props que declaremos en el Provider
          ({isAuth})=>
            isAuth
            // Autentificado
            ? 
            <Router>
              <Favs path='/favs'/>
              <User path='/user'/>
            </Router>
            // No Autentificado
            :
            <Router>
              <NotRegisteredUser path='/favs'/>
              <NotRegisteredUser path='/user'/>
            </Router>   
        }
      </Context.Consumer>
      <NavBar />
    </div>
  )
} 

