import React, {Fragment} from 'react';
// Importando Helmet
import { Helmet } from 'react-helmet';
// Importando estilos
import {Div, Title, Subtitle} from './styles';

export const Layout=({children, title, subtitle})=>{
    return(
        <Fragment>
            <Helmet>
                {
                    // Si tenemos un title lo cambiamos
                    title && <title>{title} | Petgram 🐶</title>
                }
                {
                     //Si tenemos un subtitle lo cambiamos
                     subtitle && <meta name='description' content={subtitle} />
                }
            </Helmet>
            <Div>
                {title && <Title>{title}</Title>}
                {subtitle && <Subtitle>{subtitle}</Subtitle>}
                {children}
            </Div>
        </Fragment>
    )
}