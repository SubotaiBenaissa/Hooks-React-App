import React from 'react'
import { useCounter } from '../hooks'
// import { SmallComponent } from './SmallComponent';
import { useState, useMemo } from 'react';

const heavyStuff = ( item = 1000 ) => {
    for( let i = 0; i < item; i++ ) {
        // console.log('Me gusta el chocolate');
    }
    return `${item} hechas xd`
}

export const MemoHook = () => {

    const { counter, increment, decrement } = useCounter(44);
    const [ show, setShow ] = useState(true);

    const memoValue = useMemo(() => heavyStuff(counter), [counter]);     //Siempre que no cambie counter se memoriza el valor devuelto por la función heavyStuff

    return (
        <>
            <h1>Counter con memo hook: <small>{ counter }</small></h1>
            <hr />
            <h4>{ memoValue }</h4>
            <button className='btn btn-warning' onClick={ () => increment(1) }>+1</button>
            <button className='btn btn-danger' onClick={ () => decrement(1) }>-1</button>
            <button className='btn btn-primary' onClick={ () => setShow(!show) }>Show/Hide { JSON.stringify(show) }</button>
            <hr />
        </>
    )

}