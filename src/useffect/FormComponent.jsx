import React from 'react'
import { useState, useEffect } from 'react'

export const FormComponent = () => {

    const [formState, setFormState] = useState({
        username: 'user',
        email: 'example@email.com',
    })

    const {username, email} = formState;      // Des-estructuro el formState para extraer username e email para usarlos en el input

    const onInputChange = ({ target }) => {   // lo que pasa acá es que se llama al objeto target que tiene los valores de name y value que corresponden al evento 
        const {name, value} = target          // Se des-estructuran esos valores, name y value
        // console.log({name, value})
        setFormState({                        // Como en el form también se tienen esos valores se relacionan
            ...formState,                     // Con el operador spread mantengo el estado que no cambia de formState
            [ name ]: value                   // Según el input en que se cambie su valor se asigna el nuevo valor que se escribe ej: [username]: value ó [email]: value y se cambia
        });
        console.log({name, value})            
    }

    useEffect( () => {
        console.log('useEffect invocado xdd');
    }, []);                                       // Cuando al useEffect se le manda un arreglo vacío significa que se quiere que el useEffect se ejecute una vez se monta el componente.
                                                  // Osea, una única vez cuando el componente se monta mas no cuando se renderiza de nuevo :D   
    useEffect( () => {
        console.log('formState cambiado');
    }, [ formState ])                               // Aquí el useEffect va a estar pendiente de lo que ocurra con formState, siempre que este cambie se ejecutará el useEffect
                                                  // según react se recomienda hacer useEffects pequeños que no abarquen muchos datos y que sean especializados en ciertos atributos  
    useEffect(() => {
        console.log('Email cambiado');
    }, [ email ])                                 // Como está des-estructurado el email y el username se puede invocar de esa forma

    useEffect(() => {
        console.log('Username cambiado');
    }, [ username ])                              // Igual el username :D


    return (
        
        <>
            <h1>Formulario simple owo</h1>
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
            <hr />
        </>

    )

}
