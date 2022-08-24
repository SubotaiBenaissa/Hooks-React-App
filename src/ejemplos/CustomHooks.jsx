import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';

export const CustomHooks = () => {

    const { counter, increment, decrement } = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

    const { author, quote } = !!data && data[0];

    console.log({ author, quote });

    // console.log({data, isLoading, hasError});

    if(isLoading) {
        return(<h1>Cargando...</h1>)
    }
    
    return (

        <>

            <h1>Breaking Bad citas XD</h1>
            <hr />

            {
                (isLoading) ? (
                    <div className='alert aletr-info text-center'>
                        Cargando...
                    </div>
                ) 
                : (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>
                            { quote }
                        </p>
                        <footer className='blockquote-footer mt-2'> { author } </footer>
                    </blockquote>
                )
            }

            <button className='btn btn-primary' onClick={() => increment(1)}> Siguiente cita </button>
            {
                (counter > 1) ? (
                        <button className='btn btn-primary' onClick={() => decrement(1)}> Anterior cita </button>
                ): null
            }
        </>

    )

}
