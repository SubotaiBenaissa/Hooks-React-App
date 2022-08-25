import React, { useRef } from 'react';

export const RefComponent = () => {

    const inputRef = useRef();

    const buttonClicked = () => {

        inputRef.current.select();
        
    }

    return (
        <>
            <h1>Focus screen</h1>
            <hr />
            <input 
                ref={ inputRef }
                type="text" 
                placeholder="Ingresar nombre"
                className='form-control'
            />

            <button className='btn btn-success mt-2' onClick={ buttonClicked }>Enfocar</button>
            <hr />
        </>
    )

}
