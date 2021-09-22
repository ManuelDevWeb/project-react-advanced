import React, { useEffect, useState, useRef } from 'react'

export function useNearScreen() {
    // Referencia a un elemento
    const refElement = useRef(null);
    // Manejando estado show
    const [show, setShow] = useState(false);

    // Se ejecuta cuando cambia refElement
    useEffect(() => {
        Promise.resolve(
            // Validando si intersectionObserver está disponible en el observador, de lo contrario carga la dependencia para poderlo cargar
            typeof window.IntersectionObserver !== 'undefined' ?
            window.IntersectionObserver
            // Import dinámico (Para navegadores que no soporten Insersection Observer directamente)
            :
            import ('intersection-observer')
        ).then(() => {
            // console.log(refElement.current)
            // API Insersection permite ver si los elementos estan en el viewport, se le envian las entradas
            const observer = new window.IntersectionObserver((entries) => {
                    // console.log(entries)
                    const { isIntersecting } = entries[0];
                    // console.log({isIntersecting});
                    // Validando que el elemento se encuentre en la interseccion
                    if (isIntersecting) {
                        setShow(true);
                        // Desconectamos una vez esté en el observador del usuario
                        observer.disconnect();
                    }
                })
                // Instanciando
            observer.observe(refElement.current);
        })

    }, [refElement]);

    return [show, refElement];
}