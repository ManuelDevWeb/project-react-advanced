import styled from "styled-components";

export const Button = styled.button`
    background: #8d00ff;
    border-radius: 3px;
    color: #fff;
    height: 32px;
    display: block;
    width: 100%;
    text-align: center;
    // Cuando el boton este disabled se ejecuta estos estilos
    &[disabled]{
        opacity: .3;
    }
`;