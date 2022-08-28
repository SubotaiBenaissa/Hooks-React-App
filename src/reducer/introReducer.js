
const initialState = [{           // Estado inicial de la aplicación
    id: 1,
    todo: 'Estudiar mucho',
    done: false,
}];    

const newTodo = {                        // Contenido adicional para poner en el state
    id: 2,
    todo: 'Reflexionar sobre mi vida',
    done: false
}

const todoReducer = ( state = initialState, action = {}) => {         // Al trabajar con react no se deben hacer mutaciones del state directamente

    if(action.type === 'add todo') {
        return [...state, action.payload];                            // Se usa operador spread para llamar el state inicial y luego con action.payload se llama al contenido adicional
    }                                                                 // para el state, devolviendolo con el return

    return state;                                                     // Devuelve el state 

}

const addTodoAction = {                                               // Esta es la accion a realizar por parte del reducer
    type: 'add todo',
    payload: newTodo,
}

let todos = todoReducer();                                            // Se llama al reducer con la variable todos 

todos = todoReducer(todos, addTodoAction);                            // Se le pasan como parámetros el state y la acción a realizar, en este caso addTodoAction

console.log(todos)
