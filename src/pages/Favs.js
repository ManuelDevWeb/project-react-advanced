import React from 'react';
// Importando RenderPropsFavs
import { RenderPropFavs } from '../container/GetFavorites';
// Importando compononente Layout
import {Layout} from '../components/Layout';

export const Favs = () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <RenderPropFavs />
    </Layout>
  );
};