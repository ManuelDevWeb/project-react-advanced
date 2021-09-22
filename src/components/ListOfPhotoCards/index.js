// Importando React
import React from 'react';
// Importando componente PhotoCard
import {PhotoCard} from '../PhotoCard';

export const ListOfPhotoCards=()=>{
    return(
        <ul>
            {
                [1,2,3,4,5,6,7,8,9].map(card=>(
                    <li key={card}>
                        <PhotoCard id={card}/>
                    </li>
                ))
            }
        </ul>
    )
}