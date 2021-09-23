/*
    Podríamos decir que:

    M: getPhotos
    V: ListOfPhotoCardComponent
    C: ListOfPhotoCard
    Es un pequeño MVC del lado del cliente
*/

// Importando elementos para usar GraphQL
import { gql } from "@apollo/client";

// Query para obtener todas las fotos por categoryId, (Podemos indicar cuales parametros queremos obtener del elemento photos)
export const GET_PHOTOS = gql `
    query getPhotos($categoryId: ID){
        photos(categoryId: $categoryId){
            id
            categoryId
            src
            likes
            userId
            liked
        }
    }
`;

// console.log(getPhotos);