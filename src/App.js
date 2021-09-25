// Importando React
import React, {useContext} from 'react';
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
// Importando page NotFound
import {NotFound} from './pages/NotFound';
// Importando el Contexto
import {Context} from './Context';
// Importando componente Logo
import {Logo} from './components/Logo';
// Importando componente NavBar
import {NavBar} from './components/NavBar';
// Importando estilos globales
import { GlobalStyle } from './styles/GlobalStyles';
// Importando elementos de reachRouter
import {Router, Redirect} from '@reach/router';


export const App = () => {
  const {isAuth}=useContext(Context);
  return (
    <div>
      <GlobalStyle />
      <Logo />
      {/* Rutas de nuestra aplicación */}
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {
          // Si no está autentificado, redireccionamos a login
          !isAuth && <NotRegisteredUser path='/login'/>
        }
        {
          // Si no está autentificado, redireccionamos a login
          !isAuth && <Redirect noThrow from='/favs' to='/login' />
        }
        {
          // Si no está autentificado, redireccionamos a login
          !isAuth && <Redirect noThrow from='/user' to='/login' />
        }
        {
          // Si está autentificado, redireccionamos a home
          isAuth && <Redirect noThrow from='/login' to='/' />
        }
        {/* Autentificado */}
        <Favs path="/favs" />
        <User path="/user" />
      </Router>
      <NavBar />
    </div>
  );
} 

