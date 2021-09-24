import React, { Fragment } from 'react';
// Importando custom hook UseInputValue
import UseInputValue from '../../hooks/UseInputValue';
// Importando estilos
import {Form, Input, Button, Title} from './styles';

export const UserForm=({onSubmit, title})=>{
    // Manejando estado del email y password
    const email=UseInputValue('')
    const password=UseInputValue('');

    return (
        <Fragment>
            <Title>{title}</Title>
            <Form onSubmit={onSubmit}>
                {/* Podemos simplificar aun mas, colocando solamente {...email} para que pase todos los props al input*/}
                <Input placeholder='Email' value={email.value} onChange={email.onChange}/>
                <Input placeholder='Password' type='password' value={password.value} onChange={password.onChange}/>
                <Button>{title}</Button>
            </Form>
        </Fragment>
    )
}