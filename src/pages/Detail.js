import React from 'react';
// Importando container PhotoCardGetSinglePhoto
import { PhotoCardGetSinglePhoto } from '../container/PhotoCardGetSinglePhoto';

export const Detail=({detailId})=>{
    return(
        <PhotoCardGetSinglePhoto id={detailId}/>
    )
}