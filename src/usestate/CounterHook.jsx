import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { counter } = useCounter();

    return (
        <>
            <h1>Counter Hook: { counter }</h1>
            <hr />

            <button className='btn btn-primary'>+1</button>
            <button className='btn btn-warning'>-1</button>
            <button className='btn btn-danger'>Reset</button>
            
        </>  
    );

}
