import React, { useState } from 'react'
import { useLayoutEffect, useRef } from 'react'

export const QuoteComponent = ({ quote, author }) => {

    const pRef = useRef();
    const [bound, setBound] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();
        setBound({ width, height })
    }, [])

    return (
        
        <>
        <blockquote className='blockquote text-end' style={{display: 'flex'}}>
            <p className='mb-1' ref={ pRef }>
                { quote }
            </p>
            <footer className='blockquote-footer mt-2'> { author } </footer>
        </blockquote>
        <code>{JSON.stringify(bound)}</code>
        <hr />
        </>

    )

}
