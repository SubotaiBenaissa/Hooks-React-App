import React, { useRef } from 'react';

export const RefComponent = () => {

    const inputRef = useRef();          // Apunta al elemento que lo tenga de referencia

    const buttonClicked = () => {

        inputRef.current.select();     // En base al inputRef se puede hacer algo con una función
        
    }

    return (
        <>
            <h1>Focus screen</h1>
            <hr />
            <input 
                ref={ inputRef }                 // El input tiene como referencia a inputRef entonces se apunta a este elemento
                type="text" 
                placeholder="Ingresar nombre"
                className='form-control'
            />

            <button className='btn btn-success mt-2' onClick={ buttonClicked }>Enfocar</button>
            <hr />
        </>
    )

}
