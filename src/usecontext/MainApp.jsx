import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavbarComponent } from './NavbarComponent'

export const MainApp = () => {

    return (
        <>
            <h1>Main app</h1>
            {/*<a href="/">Home</a>*/}                                {/* Hacer la navegación de esta forma genera un full refresh de la app */}
            <NavbarComponent />
            <hr />

            <Routes>                                                {/* Routes es otro HOC que recibe otros componentes hijos */}
                <Route path='/' element={ <HomePage /> }/>          {/* Dentro del Routes se ubica el componente Route que recibe como parámetro en element el componente a mostrar */}
                <Route path='about' element={ <AboutPage /> }/>
                <Route path='login' element={ <LoginPage /> }/>
                { /* <Route path='/*' element={ <HomePage /> }/> */}     {/* Cuando no se encuentra una ruta se puede especificar qué hacer con esta ruta teniendo el path que se puso */}
                <Route path='/*' element={ <Navigate to='/'/> }/>   
                {/* Otra forma de manejar rutas no existentes, en este caso usando navigate que con el parámetro "to" lleva a otra ruta especificada */}
            </Routes>
        </>
    )

}
