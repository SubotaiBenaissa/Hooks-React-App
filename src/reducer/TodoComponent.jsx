import React from 'react'
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks';


export const TodoComponent = () => {

    const { todos, onDeleteTodo, handleNewTodo, handleToggleTodo, allTodos, pendingTodos } = useTodo();

    return (
        <>
            <h1>Todo app: { allTodos } <small>pendientes: { pendingTodos }</small></h1>
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
