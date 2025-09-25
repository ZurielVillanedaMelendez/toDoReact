import logo from './images/logo-freecode.png';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img src={logo} className='freecodecamp-logo' alt='hola bb' />
     </div>
     <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <TaskList /> 
     </div>
    </div>
  );
}

export default App;
