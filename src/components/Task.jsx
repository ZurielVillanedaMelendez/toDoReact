import '../stylesheets/Task.css'
import { FaMeteor } from 'react-icons/fa';

function Task({id, texto, done, taskComplete, taskDelete }){
    return(
        <div className={done ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto"
                onClick={() => taskComplete(id)}>
                {texto}
            </div>
            <div className="tarea-contenedor-iconos"
             onClick={() => taskDelete(id)}>
                <FaMeteor className="tarea-icono"/>
            </div>
        </div>
    );
}

export default Task;