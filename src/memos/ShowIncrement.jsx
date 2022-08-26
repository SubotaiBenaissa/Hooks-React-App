import React from 'react'
import { memo } from 'react'

export const ShowIncrement = memo(({ increment }) => {

    console.log('me volví a generar');

    return (

        <button className='btn btn-success' onClick={() => {increment(5)}}>Incrementar</button>

    )

})
