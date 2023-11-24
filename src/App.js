import './App.css';
import { TaskItem } from './componentes/TaskItem';
import TaskForm from './componentes/TaskForm'

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Lista de Tareas</h1>
        <TaskForm />

        <TaskItem />
      </div>
      
       
    </div>
  );
}

export default App;
