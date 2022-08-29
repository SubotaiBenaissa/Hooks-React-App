import React from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { useTodo } from '../hooks/useTodo'


export const TodoComponent = () => {

    const { todos, onDeleteTodo, handleNewTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>Todo app: 10 <small>pendientes: 2</small></h1>
            <div className='row'>
                <div className='col-7'>
                    <TodoList todos={ todos } onRemoveTodo={ onDeleteTodo } onToggleTodo={ handleToggleTodo }/>
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
