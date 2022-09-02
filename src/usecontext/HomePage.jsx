import React from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'

export const HomePage = () => {

    const { user, setUser } = useContext( UserContext );

    const onButtonPressed = () => {

        setUser({
            id: '1231',
            name: 'Alexis Andrés',
            email: 'alangobe01@gmail.com'
        })

    }

    return (
        <>
            <h1>Home page <small>{ user?.name }</small></h1>
            <hr />
            <pre>
                { JSON.stringify( user, null, 3 ) }
            </pre>
            <button className="btn btn-primary" onClick={ onButtonPressed }>
                Establecer usuario
            </button>
        </>
    )

}
