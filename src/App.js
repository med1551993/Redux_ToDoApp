import { useSelector } from 'react-redux';
import './App.css';
import AddMenu from './components/AddMenu';
import AddTask from './components/AddTask';
import TasksList from './components/TasksList';



function App() {
  const el = useSelector((el) => el.show.show)
 
  
  return (
    <div className='App'>
     
      {el && <AddMenu />} 
     
      <AddTask />
      
      <TasksList /> 
    </div>
  );
}

export default App;
