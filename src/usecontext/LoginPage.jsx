import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { Hola, user } = useContext( UserContext );
    // console.log( Hola );

    return (
        <>
            <h2>Login Page</h2>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) } 
            </pre>

        </>
    )

}
