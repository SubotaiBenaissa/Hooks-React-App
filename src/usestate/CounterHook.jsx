import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CounterHook = () => {

    const { counter, increment, decrement, resetCounter } = useCounter();  // Traigo las funciones de useCounter para usarlas

    return (
        <>
            <h1>Counter Hook: { counter }</h1>
            <hr />

            <button className='btn btn-primary' onClick={() => increment(3)}>+1</button>
            <button className='btn btn-warning' onClick={() => decrement(3)}>-1</button>
            <button className='btn btn-danger' onClick={resetCounter}>Reset</button>
            <hr />
        </>  
    );

}
