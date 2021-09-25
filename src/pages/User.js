import React, {Fragment, useContext} from 'react';
// Importando Contexto
import { Context } from '../Context';
// Importando componente SubmitButton
import {SubmitButton} from '../components/SubmitButton'

export const User=()=>{
    const {removeAuth}=useContext(Context);

    return(
        <Fragment>
            <h1>User</h1>
            <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
        </Fragment>
    )
}
