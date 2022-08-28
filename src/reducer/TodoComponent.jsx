import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Estudiar React y Django',
        done: 'false'
    },
    {
        id: new Date().getTime() + 100,
        description: 'Estudiar inglés',
        done: 'false'
    }
]

export const TodoComponent = () => {

    const [ todos, dispatchTodo ] = useReducer(todoReducer, initialState);

    const handleNewTodo = ( todo ) => {
        console.log({ todo });
    }

    return (
        <>
            <h1>Todo app: 10 <small>pendientes: 2</small></h1>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={todos}/>
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
