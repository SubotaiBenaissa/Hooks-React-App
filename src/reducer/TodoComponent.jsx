import React, { useEffect, useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = []

const initializer = () => {

    return JSON.parse( localStorage.getItem('todos')) || [];            // Se traen los todos del localstorage que estén actualmente

}

export const TodoComponent = () => {

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

        console.log(id);

        const action = {
            type: 'remove todo',                
            payload: id                         // Acá se devuelve el id que viene de los componentes hijos
        }

        dispatchTodo(action);                   // Se envía la acción al reducer

    }

    return (
        <>
            <h1>Todo app: 10 <small>pendientes: 2</small></h1>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos } onRemoveTodo={ onDeleteTodo }/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>
        </>
    )
}
