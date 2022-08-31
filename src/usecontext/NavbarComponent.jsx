import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarComponent = () => {

    return (
        <>
            <Link to="/">Home</Link>                                      {/* Para navegar sin hacer full reafresh de la app se utiliza el componente link */}
            <Link to="about">About</Link>                                 {/* Link solo cambia el componente de la aplicación */}
            <Link to="login">Login</Link>
        </>
    )

}
