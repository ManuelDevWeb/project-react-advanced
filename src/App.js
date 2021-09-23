// Importando React
import React, { Fragment } from 'react';
// Importando componente ListOfCategories
import { ListOfCategories } from './components/ListOfCategories';
// Importando container ListOfPhotoCards
import { ListOfPhotoCards } from './container/ListOfPhotoCards';
// Importando container PhotoCardGetSinglePhoto
import { PhotoCardGetSinglePhoto } from './container/PhotoCardGetSinglePhoto';
// Importando componente Logo
import {Logo} from './components/Logo';
// Importando estilos globales
import { GlobalStyle } from './styles/GlobalStyles';

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
        : <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2}/>
          </Fragment>
      }
      
    </div>
  )
} 

