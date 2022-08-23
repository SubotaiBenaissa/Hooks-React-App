import React, { useState } from 'react'

export const CounterApp = () => {

    const [counter, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30
    })

    const { counter1, counter2, counter3 } = counter

    return (
        <>
            <h1>Counter 1: {counter.counter1}</h1>
            <h1>Counter 2: {counter.counter2}</h1>
            <h1>Counter 3: {counter.counter3}</h1>
            <hr />
            <p>Counter 1:</p>
            <button className='btn btn-success' onClick={
                () => {setCounter({
                    ...counter,
                    counter1: counter1 + 1
                })}
            }>+1</button>
            <button className='btn btn-danger' onClick={
                () => {setCounter({
                    ...counter,
                    counter1: counter1 - 1
                })}
            }>-1</button>
            <hr />
            <p>Counter 2:</p>
            <button className='btn btn-success' onClick={
                () => {setCounter({
                    ...counter,
                    counter2: counter2 + 1
                })}
            }>+1</button>
            <button className='btn btn-danger' onClick={
                () => {setCounter({
                    ...counter,
                    counter2: counter2 - 1
                })}
            }>-1</button>
            <hr />
            <p>Counter 3:</p>
            <button className='btn btn-success' onClick={
                () => {setCounter({
                    ...counter,
                    counter3: counter3 + 1
                })}
            }>+1</button>
            <button className='btn btn-danger' onClick={
                () => {setCounter({
                    ...counter,
                    counter3: counter3 - 1
                })}
            }>-1</button>
            <hr />
        </>    
    )

}
