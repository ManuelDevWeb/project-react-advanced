// Importando React
import React, { Fragment } from 'react';
// Importando componente Category
import { ListOfCategories } from './components/ListOfCategories';
// Importando estilos globales
import { GlobalStyle } from './GlobalStyles';

function App () {
  return (
    <>
      <GlobalStyle />
      <ListOfCategories />
    </>
  );
}

export default App;
