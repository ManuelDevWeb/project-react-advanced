// Importando React
import React from 'react';
// Importando componente ListOfCategories
import { ListOfCategories } from './components/ListOfCategories';
// Importando componente ListOfPhotoCards
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
// Importando componente Logo
import {Logo} from './components/Logo';
// Importando estilos globales
import { GlobalStyle } from './styles/GlobalStyles';

export const App = () => (
  <div>
    <GlobalStyle />
    <Logo />
    <ListOfCategories />
    <ListOfPhotoCards />
  </div>
)

