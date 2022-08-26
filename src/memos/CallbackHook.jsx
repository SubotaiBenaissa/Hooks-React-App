import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState(0);

    const increment = useCallback(
        (value) => {                                      // Si se reciben parámetros, se reciben acá
            setCounter( ( count ) => value + count );
        },
        [],
    )

    /*useEffect(() => {
        increment();
    }, [increment])*/
    

    return (

        <>
            <h1>Callback hook: { counter }</h1>            
            <hr />
            <ShowIncrement increment={ increment }/>
        </>

    )

}
