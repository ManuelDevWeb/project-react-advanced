import React, {Fragment} from 'react';
// Importando componente ListOfCategories
import { ListOfCategories } from '../components/ListOfCategories';
// Importando container ListOfPhotoCards
import { ListOfPhotoCards } from '../container/ListOfPhotoCards';

// El id viene por el path
export const Home=({categoryId})=>{
    return(
        <Fragment>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={categoryId}/>
        </Fragment>
    )
}