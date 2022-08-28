import React, { useState } from 'react'
import { useForm } from '../hooks'

export const TodoAdd = ({ onNewTodo }) => {

    const { onInputChange, onResetForm, description } = useForm({
        description: '',
        done: false
    });

    const onFormSubmit = (event) => {
        event.preventDefault();
        if( description.length <= 1 ) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description
        }
        onNewTodo(newTodo);
        onResetForm();
    }

    return (

        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Tarea a realizar"
                className="form-control"
                name="description"
                value={ description }
                onChange={ onInputChange }
            />
            <button type="submit" className="btn btn-success mt-2">
                Agregar
            </button>
        </form>

    )
}
