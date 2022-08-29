
export const todoReducer = ( initialState = [], action ) => {

    switch( action.type ) {
        case 'add todo':
            return [...initialState, action.payload]        
        case 'remove todo':
            return initialState.filter( ( todo ) => todo.id !== action.payload); 
            /* El filter devuelve un nuevo arreglo por lo cual no muta el state directamente, en este caso
            devuelve el arreglo sin el id que se envía desde el componente TodoComponent siendo ese arreglo
            el nuevo initialState */ 
        case 'toggle todo':
            return initialState.map( ( todo ) => {         // Recorre los todos 
                if(todo.id === action.payload) {           // Se evalúa que el id del todo sea igual al que manda el componente y le cambia el valor de done al inverso
                    return {
                        ...todo,
                        done: !todo.done                  // Inverso del todo que pasa por el if
                    }
                }
                return todo;                               // Si no lo es devuelve el todo normal
            })
        default:                                                                  
            return initialState                                                   
    }  

}