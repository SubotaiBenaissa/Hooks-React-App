import React, { useEffect } from 'react'

export const MsgComponent = () => {

    useEffect(() => {

        const onMouseMove = ( { x, y } ) => {                    // Para poder hacer limpieza con el cleanup se tiene que crear una referencia al listener que se quiere parar
            const coords = { x, y };
            console.log(coords);
        }                     
        console.log('MsgComponent montado');                     // Cuando se monta el componente se muestra el mensaje y se ejecuta el listener
        window.addEventListener('mousemove', onMouseMove)            
        
        return () => {

            console.log('MsgComponent desmontado');                 // Este es el cleanup y se ejecuta cuando el useEffect termina, en este caso, cuando se desmonta el componente :D
            window.removeEventListener('mousemove', onMouseMove);   // Se para el listener de mousemove

        }

    }, []);                                             // Array vacío para indicar que se ejecutará el useEffect cuando se monte el componente
    

    return (
        
        <>
            <h3> Usuario ya existe </h3>
        </>

    )

}
