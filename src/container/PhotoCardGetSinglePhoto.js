/*
    A diferencia de como se implemento la query en el ListOfPhotoCardsComponent (MVC)
    acá se utiliza renderProps, es decir se maneja el modelo (La query) dentro del 
    controlador y luego se envia por props la data a la vista.

    Se recomienda usar esta técnica, por encima de la otra utilizada.
*/

import React from 'react';
// Importando componente PhotoCard
import { PhotoCard } from '../components/PhotoCard';
// Importando elementos para usar GraphQL
import {gql, useQuery} from "@apollo/client";

// Query para obtener una foto por categoryId, (Podemos indicar cuales parametros queremos obtener del elemento photo)
const getSinglePhoto=gql`
    query getSinglePhoto($id:ID!){
        photo(id:$id){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

export const PhotoCardGetSinglePhoto=({id})=>{
    // Llamamos la query con el método useQuery y le enviamos las variables necesarias.
    // Obtenemos los props que vienen desde la query de getSinglePhoto.
    const {loading, error, data}=useQuery(getSinglePhoto, {variables: {id}});

    if(error){
        return <h2>Internal Server Error</h2>
    }
    if(loading){
        return <h2>Loading...</h2>
    }

    // Enviamos al componente PhotoCard la data de la Photo
    return <PhotoCard {...data.photo}/>
}