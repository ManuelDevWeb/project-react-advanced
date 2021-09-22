// Importando React
import React, {useState, useEffect, Fragment} from 'react';
// Importando componente Category
import { Category } from '../Category';
// Importando estilos
import { List, Item } from './styles';
// import {categories as mockCaterogires} from '../../../api/db.json';

// Custom hook para hacer fetch a la API
function useCategoriesData(){
  // Manejando estado del componente
  const [categories, setCaterogires]=useState([])
  // Manejando estado de cargando
  const [loading, setLoading]=useState(false);

  // Se ejecuta cuando se renderice el componente por primera vez
  useEffect(() => {
    setLoading(true);
    // Fetch a la URL que tenemos desplegada en vercel
    fetch('https://backend-app-animales-insta.vercel.app/categories')
      .then(res =>res.json())
      .then(response=>{
        // Enviando valor al state categorias
        setCaterogires(response)
        setLoading(false);
      })
  },[])

  // Retornamos las categorias
  return {categories, loading}
}

export const ListOfCategories = () => {
  const {categories, loading}= useCategoriesData();
  
  // Estado para saber si está fija
  const [showFixed, setShowFixed]=useState(false);

  // Se ejecuta cuando se cambia el estado showFixed
  useEffect(()=>{
    // Este método se ejecuta cada vez que hagamos scroll
    const onScroll=e=>{
      const newShowFixed=window.scrollY>200;
      // Si el newShowFixed es verdadero, entonces seteamos el showFixed
      showFixed!=newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll);

    // Limpiando el efecto cada vez que se vuelva a ejecutar. Si el componenten ListOfCategories
    // dejase de funcionar, seguiria escuchando el evento scroll y generaria un memory leak
    return () => document.removeEventListener('scroll', onScroll);
  }, [showFixed])

  // Hay 2 tipos de lista, una (true) que queda fija cuando hacemos scroll y la otra que esta siempre arriba
  const renderList=(fixed)=>(
    <List fixed={fixed}>
      {
        loading 
          // Si está cargando mostramos la categoria por defecto
          ? <Item key='loading'><Category /></Item>
          // Si ya cargo, mostramos la lista de categorias
          : categories.map(category => (
              <Item key={category.id}>
                <Category 
                  {...category}
                />
              </Item>
            ))
      }
    </List>
  )

  return (
    <Fragment>
      {
      renderList()
      }
      { 
        // Se ejecuta si showFixed es true
        showFixed && renderList(true)
      }  
    </Fragment>
  );
};
