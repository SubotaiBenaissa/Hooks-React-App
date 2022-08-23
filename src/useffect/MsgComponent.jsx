import React, { useEffect } from 'react'

export const MsgComponent = () => {

    useEffect(() => {

        console.log('MsgComponent montado');            // Cuando se monta el componente se muestra el mensaje  
        
        return () => {

            console.log('MsgComponent desmontado');     // Este es el cleanup y se ejecuta cuando el useEffect termina, en este caso, cuando se desmonta el componente :D

        }

    }, [])                                              // Array vacío para indicar que se ejecutará el useEffect cuando se monte el componente
    

    return (
        
        <>
            <h3> Usuario ya existe </h3>
        </>

    )

}
