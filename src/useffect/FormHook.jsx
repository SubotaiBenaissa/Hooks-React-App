import React from 'react'
// import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
// import { MsgComponent } from './MsgComponent';

export const FormHook = () => {
    
    const { formState, onInputChange, onResetForm, username, email, password } = useForm({         // Aquí llamo a los atributos que le asigno al useForm para definirlos
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;

    return (
        
        <>
            <h1>Formulario con hook personalizado owo</h1>
            <hr />
            <input 
                type='text' 
                className='form-control mt-2' 
                placeholder='Username'
                name='username' 
                value={ username }                  // Le asigno el valor de username que pertenece a fromState
                onChange={ onInputChange }          // Cuando se cambia el form se ejecuta la función onInputChange
            />
            <input 
                type='text' 
                className='form-control mt-2' 
                placeholder='Email'
                name='email' 
                value={ email }
                onChange={ onInputChange }          // Lo mismo con el email
            />
            <input 
                type='password' 
                className='form-control mt-2' 
                placeholder='Password'
                name='password' 
                value={ password }
                onChange={ onInputChange }          
            />

            <button onClick={ onResetForm } className='btn btn-warning mt-2'>
                Reset
            </button>

            <hr />
        </>

    )

}
