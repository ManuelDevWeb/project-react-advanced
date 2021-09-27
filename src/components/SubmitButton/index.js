import React from 'react'
// Importando estilos
import { Button } from './styles';
// Importando PropTypes
import PropTypes from 'prop-types';

export const SubmitButton=({children, onClick, disabled})=>{
    return(
        <Button disabled={disabled} onClick={onClick}>{children}</Button>
    )
}

SubmitButton.propTypes={
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
}