import React from 'react';
// Importando iconos
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
// Importando estilos
import {Button} from './styles';
// Importando PropTypes
import PropTypes from 'prop-types';

function FavButton({liked, likes, onClick}) {
    // Validando el valor de liked para asignar el icono
    const Icon=liked ? MdFavorite : MdFavoriteBorder;

    return (
        <Button onClick={onClick}>
            <Icon size='28px'/> {likes} likes!  
        </Button>
    )
}

FavButton.propTypes={
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default FavButton;
