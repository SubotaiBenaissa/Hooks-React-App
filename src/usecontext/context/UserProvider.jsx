import React from 'react'
import { UserContext } from './UserContext'

const user = {
    id: 123,
    name: 'Alexis',
    email: 'alexis@correo.com'
}

export const UserProvider = ({ children }) => {

    return (
        
        <UserContext.Provider value={{Hola: 'Mundo', user: user}}>
            { children }
        </UserContext.Provider>

    )
    
}
