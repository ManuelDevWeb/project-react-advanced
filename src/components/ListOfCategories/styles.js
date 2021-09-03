// Importando styled
import styled from 'styled-components';

// Estilos a la etiqueta ul
export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    
    &::-webkit-scrollbar {
    display: none;
  }
`;

// Estilos a la etiqueta li
export const Item = styled.li`
    padding: 0 8px;
`;
