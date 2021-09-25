import React, {Fragment} from 'react';
// Importando RenderPropsFavs
import { RenderPropFavs } from '../container/GetFavorites';

export const Favs = () => {
  return (
    <Fragment>
      <h1>Favoritos!!!</h1>
      <RenderPropFavs />
    </Fragment>
  );
};