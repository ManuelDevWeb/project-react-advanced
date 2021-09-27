import React from 'react';
// Importando componente ListOfCategories
import { ListOfCategories } from '../components/ListOfCategories';
// Importando container ListOfPhotoCards
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';
// Importando compononente Layout
import {Layout} from '../components/Layout';

// El id viene por el path
const HomePage=({categoryId})=>{
    return(
        <Layout title='Tu App de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de cualquier tipo de animales domésticos'>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={categoryId}/>
        </Layout>
    )
}

// Comparamos props anteriores con los actuales para saber si ha cambiado la categoriaId. Si son iguales no se renderiza de nuevo
export const Home= React.memo(HomePage, (prevProps,props)=>{
    return prevProps.categoryId === props.categoryId
});