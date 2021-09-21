// Importando React
import React from 'react';
// Importando componente Category
import { Category } from '../Category';
// Importando estilos
import { List, Item } from './styles';
import DB from '../../../api/db.json';

export const ListOfCategories = () => {
  // Destructurando las caterogies de la DB
  const {categories}=DB;

  return (
    <List>
      {
        categories.map(category => (
            <Item key={category.id}>
              <Category 
                {...category}
              />
            </Item>
        ))
      }
    </List>
  );
};
