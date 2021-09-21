// Importando styled
import { css, keyframes } from 'styled-components';

// Estilos de algunas animaciones
export const fadeInKeyframe = keyframes `
    from{
        filter: blue(5px);
        opacity:0;
    }
    
    to{
        filter: blur(0);
        opacity: 1;
    }
`;

// Función para reutilizar la animación
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => (
    css `
        animation: ${time} ${fadeInKeyframe} ${type};
    `
)