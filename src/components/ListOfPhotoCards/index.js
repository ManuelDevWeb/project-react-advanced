// Importando React
import React from 'react';
// Importando componente PhotoCard
import {PhotoCard} from '../PhotoCard';

export const ListOfPhotoCards=()=>{
    return(
        <ul>
            {
                [1,2,3,4].map(card=>(
                    <li key={card}>
                        <PhotoCard />
                    </li>
                ))
            }
        </ul>
    )
}