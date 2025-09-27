import '../stylesheets/FormTask.css';
import { useState } from 'react';
import {v4 as uuid4 } from 'uuid'

function FormTask(props) {

    const [input, setInput] = useState('');

    const handlerChange = e => {
        setInput(e.target.value);
    }

    const handlerSend = e => {
        e.preventDefault(); 
        const addTask = {
            id: uuid4(),
            texto: input,
            done: false
        }
        props.onSubmit(addTask);
    }

    return(
        <form className="tarea- formulario"
        onSubmit={handlerSend}>
            <input
                className="tarea-input"
                type="text"
                placeholder="Scribe a task"
                name="text" 
                onChange={handlerChange}
            />
            <button className="tarea-boton">Agregar Tarea</button>
            
        </form>
    );
}

export default FormTask;