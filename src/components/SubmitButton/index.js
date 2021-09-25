import React from 'react'
// Importando estilos
import { Button } from './styles';

export const SubmitButton=({children, onClick, disabled})=>{
    return(
        <Button disabled={disabled} onClick={onClick}>{children}</Button>
    )
}