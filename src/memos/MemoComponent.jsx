import React from 'react'
import { useCounter } from '../hooks'
import { SmallComponent } from './SmallComponent';
import { useState } from 'react';

export const MemoComponent = () => {

    const { counter, increment, decrement } = useCounter(5);
    const [ show, setShow ] = useState(true);

    return (
        <>
            <h1>Counter: <SmallComponent value={counter}/></h1>
            <hr />
            <button className='btn btn-warning' onClick={ () => increment(1) }>+1</button>
            <button className='btn btn-danger' onClick={ () => decrement(1) }>-1</button>
            <button className='btn btn-primary' onClick={ () => setShow(!show) }>Show/Hide { JSON.stringify(show) }</button>
            <hr />
        </>
    )

}
