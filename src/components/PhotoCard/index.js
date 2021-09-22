// Importando React
import React, {Fragment, useEffect, useRef, useState} from 'react';
// Importando estilos
import {ImgWrapper, Img, Button, Article} from './styles';
// Importando iconos
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
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

    // Validando el valor de liked para asignar el icono
    const Icon=liked ? MdFavorite : MdFavoriteBorder;

    return(
        <Article ref={refElement}>
            {
                show ?
                <Fragment>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={src}/>
                        </ImgWrapper>
                    </a>

                    <Button onClick={()=>setLiked(!liked)}>
                        <Icon size='28px'/> {likes} likes!  
                    </Button>
                </Fragment>
                :
                null
            }
            
        </Article>
    )
}