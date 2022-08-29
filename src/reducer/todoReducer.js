
export const todoReducer = ( initialState = [], action ) => {

    switch( action.type ) {
        case 'add todo':
            return [...initialState, action.payload]        
        case 'remove todo':
            return initialState.filter(todo => todo.id !== action.payload); 
            /* El filter devuelve un nuevo arreglo por lo cual no muta el state directamente, en este caso
            devuelve el arreglo sin el id que se envía desde el componente TodoComponent siendo ese arreglo
            el nuevo initialState */     
        default:                                                                  
            return initialState                                                   
    }  

}