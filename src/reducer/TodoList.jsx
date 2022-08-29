import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onRemoveTodo, onToggleTodo }) => {


    return (

        <ul className="list-group">
        {
            todos.map( (todo) => (
                <TodoItem key={todo.id} todo={todo} onRemoveTodo={ onRemoveTodo } onToggleTodo={ onToggleTodo }/>   // acá se manda la referencia de la función de borrar todo del componente padre
            ) )
        }
        </ul>
        
    )
}
