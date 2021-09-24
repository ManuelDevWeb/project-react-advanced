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
// Importando hooks personalizado
import {useLocalStorage} from '../../hooks/useLocalStorage';
import {useNearScreen} from '../../hooks/useNearScreen';

const DEFAULT_IMAGE="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"

export const PhotoCard=({id, likes=0, src=DEFAULT_IMAGE})=>{
    // Key personalizada para cada photoCard
    const key=`like-${id}`;

    // Llamando y enviando valores al hook personalizado
    const [liked, setLiked]=useLocalStorage(key, false);
    const [show, refElement]=useNearScreen();

    const {mutation, mutationLoading, mutationError}=ToggleLikeMutation();

    // Función que se ejecuta al dar click sobre el button
    const handleFavClick=()=>{
        // Si le damos like a la foto, hacemos la mutación (Incrementamos el número de likes)
        !liked && mutation({
            variables: {
              input: { id }
            }
        })
        
        setLiked(!liked);
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