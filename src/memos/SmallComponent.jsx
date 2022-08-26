import React from 'react';
import { memo } from 'react';

export const SmallComponent = memo(({ value }) => {         // memo recibe como argumento un componente, siempre que no cambien sus props no se renderiza de nuevo

    // console.log('Me volví a generar');

    return (
        
        <small>{ value }</small>

    )

})
