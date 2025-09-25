import '../stylesheets/FormTask.css'

function FormTask(props) {
    return(
        <form className="tarea- formulario">
            <input
                className="tarea-input"
                type="text"
                placeholder="Scribe a task"
                name="text" 
            />
            <button className="tarea-boton">Agregar Tarea</button>
            
        </form>
    );
}

export default FormTask;