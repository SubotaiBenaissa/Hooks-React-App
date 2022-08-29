import { useReducer, useEffect } from "react";
import { todoReducer } from "../reducer/todoReducer";

export const useTodo = ( initialState = [] ) => {

    const initializer = () => {

        return JSON.parse( localStorage.getItem('todos')) || [];            // Se traen los todos del localstorage que estén actualmente
    
    }

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState, initializer);

    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify(todos) || []);                           // Aquí se guarda en LocalStorage los todos que salgan del input
        
    }, [todos])                                                                     // Si cambian los todos se ejecuta el useEffect que en este caso guardará los todos en LocalStorage

    const handleNewTodo = ( todo ) => {

        const action = {              // Se crea la acción con el type 'add todo'
            type: 'add todo',
            payload: todo
        }

        dispatchTodo(action);         // Aquí se manda la acción al reducer

    }

    const onDeleteTodo = ( id ) => {

        // console.log(id);

        const action = {
            type: 'remove todo',                
            payload: id                         // Acá se devuelve el id que viene de los componentes hijos
        }

        dispatchTodo(action);                   // Se envía la acción al reducer

    }

    const handleToggleTodo = ( id ) => {

        console.log({ id });

        const action = {
            type: 'toggle todo',                
            payload: id                         // Acá se devuelve el id que viene de los componentes hijos
        }

        dispatchTodo(action); 

    }

    return {
        todos,
        handleNewTodo,
        onDeleteTodo,
        handleToggleTodo
    }                                          // Se mandan todos los métodos del hook useTodo que se usarán
    
}
