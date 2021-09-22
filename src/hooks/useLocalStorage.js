import React, { useState } from 'react'


export function useLocalStorage(key, initialValue) {
    // Manejando estado liked
    const [storedValue, setValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            // Si hay algo debemos parseal el item para devolverlo
            return item !== null ? JSON.parse(item) : initialValue;
        } catch (error) {
            return initialValue;
        }
    });

    // Función para enviar el valor del estado liked al storage
    const setLocalStorage = value => {
        try {
            window.localStorage.setItem(key, JSON.stringify(value))
            setValue(value);
        } catch (error) {
            console.log(error);
        }
    }

    // Retornamos el valor almacenado y la función para actualizar el localStorage
    return [storedValue, setLocalStorage]
}