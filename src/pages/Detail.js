import React from 'react';
// Importando container PhotoCardGetSinglePhoto
import { PhotoCardGetSinglePhoto } from '../container/PhotoCardGetSinglePhoto';
// Importando compononente Layout
import {Layout} from '../components/Layout';

export const Detail=({detailId})=>{
    return(
        <Layout title={`Fogotafria ${detailId}`}>
            <PhotoCardGetSinglePhoto id={detailId}/>
        </Layout>
    )
}