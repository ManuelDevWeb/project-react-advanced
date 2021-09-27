import React from 'react';
// Importando RenderPropsFavs
import { RenderPropFavs } from '../container/GetFavorites';
// Importando compononente Layout
import {Layout} from '../components/Layout';

export default () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
      <RenderPropFavs />
    </Layout>
  );
};