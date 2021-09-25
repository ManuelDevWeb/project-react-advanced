import React, { Fragment } from 'react';
// Importando custom hook UseInputValue
import UseInputValue from '../../hooks/UseInputValue';
// Importando estilos
import {Form, Input, Title, Error} from './styles';
// Importando componente SubmitButton
import {SubmitButton} from '../SubmitButton';

export const UserForm=({onSubmit, title, error, disabled})=>{
    // Manejando estado del email y password
    const email=UseInputValue('')
    const password=UseInputValue('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        onSubmit({
            email:email.value, 
            password:password.value
        })
    }

    return (
        <Fragment>
            <Title>{title}</Title>
            <Form disabled={disabled} onSubmit={handleSubmit}>
                {/* Podemos simplificar aun mas, colocando solamente {...email} para que pase todos los props al input*/}
                <Input disabled={disabled} placeholder='Email' value={email.value} onChange={email.onChange}/>
                <Input disabled={disabled} placeholder='Password' type='password' value={password.value} onChange={password.onChange}/>
                <SubmitButton disabled={disabled}>{title}</SubmitButton>
            </Form>
            {
                // Si hay un error renderizamos
                error && <Error>{error}</Error>
            }
        </Fragment>
            
    )
}