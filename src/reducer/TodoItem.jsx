import React from 'react'

export const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className={`align-self-center ${ ( todo.done ) ? 'text-decoration-line-through' : ''}`} onClick={() => onToggleTodo( todo.id )}>{ todo.description }</span>
            <button className="btn btn-danger" onClick={ () => onRemoveTodo( todo.id ) }>      {/* Acá se envía el id del todo al componente TodoList */}
                Borrar
            </button>
        </li>
    )

}
