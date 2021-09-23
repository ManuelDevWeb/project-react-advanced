import React from 'react';
// Importando iconos
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
// Importando estilos
import {Button} from './styles';

function FavButton({liked, likes, onClick}) {
    // Validando el valor de liked para asignar el icono
    const Icon=liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={onClick}>
            <Icon size='28px'/> {likes} likes!  
        </Button>
    )
}

export default FavButton;
