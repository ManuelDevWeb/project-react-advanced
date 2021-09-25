// Importando React
import React, {Fragment} from 'react';
// Importando Link
import { Link } from '@reach/router';
// Importando componente FavButton
import FavButton from '../FavButton';
// Importando container ToggleLikeMutation
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
// Importando estilos
import {ImgWrapper, Img, Article} from './styles';
import {useNearScreen} from '../../hooks/useNearScreen';

const DEFAULT_IMAGE="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard=({id, likes=0,liked, src=DEFAULT_IMAGE})=>{

    // Llamando y enviando valores al hook personalizado
    const [show, refElement]=useNearScreen();

    const {mutation, mutationLoading, mutationError}=ToggleLikeMutation();

    // Función que se ejecuta al dar click sobre el button
    const handleFavClick=()=>{
        // Hacemos la mutación (Incrementamos el número de likes)
        mutation({
            variables: {
              input: { id }
            }
        })
        
    }

    // console.log('{ mutation, mutationLoading, mutationError }', { mutation, mutationLoading, mutationError })

    return(
        <Article ref={refElement}>
            {
                show ?
                <Fragment>
                    <Link to={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </Link>

                    <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
                </Fragment>
                :
                null
            }
        </Article>
    )
}