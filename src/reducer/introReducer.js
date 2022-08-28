
const initialState = [{           // Estado inicial de la aplicación
    id: 1,
    todo: 'Estudiar mucho',
    done: false,
}];          

const todoReducer = ( state = initialState, action ) => {         // Al trabajar con react no se deben hacer mutaciones del state directamente


    return state;

}

let todos = todoReducer();

console.log(todos);