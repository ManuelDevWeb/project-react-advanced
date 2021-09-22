/*
    Podríamos decir que:

    M: getPhotos
    V: ListOfPhotoCardComponent
    C: ListOfPhotoCard
    Es un pequeño MVC del lado del cliente
*/

// Importando React
import React from 'react';
// Importando componente PhotoCard
import {PhotoCard} from '../PhotoCard';

// Recibimos el category Id desde el App.js
export const ListOfPhotoCardsComponent=({data})=>{
    return(
        <ul>
            {
                data.photos.map(card=>(
                    <li key={card.id}>
                        <PhotoCard {...card}/>
                    </li>
                ))
            }
        </ul>
    )
}