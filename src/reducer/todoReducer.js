
export const todoReducer = ( intialState = [], action ) => {

    switch( action.type ) {
        case 'add todo':
            return [...intialState, action.payload]
        default: 
            return intialState
    }
    

}