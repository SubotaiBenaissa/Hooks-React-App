import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavbarComponent = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-2">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <NavLink className={'nav-link'} to="/">Home</NavLink>
                        <NavLink className={'nav-link'} to="about">About</NavLink>
                        <NavLink className={'nav-link'} to="login">Log in</NavLink>
                    </ul>
                </div>
            </div>
        </nav>

    )

}
