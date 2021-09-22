/*
    Podríamos decir que:

    M: getPhotos
    V: ListOfPhotoCardComponent
    C: ListOfPhotoCard
    Es un pequeño MVC del lado del cliente
*/

import React from 'react';
// Importando la query (Componente hoc getPhotos)
import { getPhotos } from '../hoc/getPhotos';
// Importando elementos para usar GraphQL
import { useQuery} from "@apollo/client";
// Importando ListOfPhotoCardsComponent
import { ListOfPhotoCardsComponent } from '../components/ListOfPhotoCards';

export const ListOfPhotoCards = ({categoryId})=>{
    // Llamamos la query con el método useQuery y le enviamos las variables necesarias.
    // Obtenemos los props que vienen desde la query de withPhotos.
    const {loading, error, data}=useQuery(getPhotos, {variables: {categoryId}});

    if(error){
        return <h2>Internal Server Error</h2>
    }
    if(loading){
        return <h2>Loading...</h2>
    }

    return <ListOfPhotoCardsComponent data={data}/>
}






   