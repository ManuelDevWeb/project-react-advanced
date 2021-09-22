// Importando styled
import styled, { css } from 'styled-components';

// Estilos a la etiqueta ul
export const List = styled.ul `
    display: flex;
    overflow: scroll;
    width: 100%;
    margin-bottom: 5px;
    &::-webkit-scrollbar {
    display: none;
    }
    /* Si tenemos una prop llamada fixed ejecutamos el método css */
    ${props=>props.fixed && css`
        {
            background-color: #FFFFFF;
            border-radius: 60px;
            box-shadow: 0 0 20px rgba(0,0,0,0.3);
            left: 0;
            margin: 0 auto;
            max-width: 400px;
            padding: 5px;
            position: fixed;
            right: 0;
            top: -20px;
            transform: scale(.5);
            z-index: 1;
        }
    `}
`;

// Estilos a la etiqueta li
export const Item = styled.li `
    padding: 0 8px;
`;