// Importando styled
import styled from 'styled-components';
// Importando animaciones
import { fadeIn } from '../../styles/animation';

// Estilos al article
export const Article = styled.article `
    min-height: 200px;
`;

// Estilos a la etiqueta div
export const ImgWrapper = styled.div `
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.26% 0 0 0;
    position: relative;
    width: 100%;
`;

// Estilos a la etiqueta img
export const Img = styled.img `
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0,0,0,.2);
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
`;

// Estilos al button
export const Button = styled.button `
    display: flex;
    align-items: center;
    padding-top: 8px;

    & svg{
        margin-right: 4px;
    }
`;