import React,{ createContext, useState } from "react";

export const Context=createContext();

const Provider=({children})=>{
    // Manejando el estado para saber si está logeado o no
    const [isAuth, setIsAuth]=useState(()=>{
        // Retorna el token para saber si el usuario está autentificado o no lo está
        return window.sessionStorage.getItem('token');
    });

    const value={
        isAuth,
        activateAuth:(token)=>{
            setIsAuth(true);
            // Guardando token en el sessionStorage
            window.sessionStorage.setItem('token',token);
        }
    }

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}


export default {
    Provider,
    Consumer: Context.Consumer
};