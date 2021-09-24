import React,{ createContext, useState } from "react";

const Context=createContext();

const Provider=({children})=>{
    // Manejando el estado para saber si está logeado o no
    const [isAuth, setIsAuth]=useState(false);

    const value={
        isAuth,
        activateAuth:()=>{
            setIsAuth(true)
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