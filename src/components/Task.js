import React from 'react'
import del from './trash-can-solid.svg'
import { useDispatch} from 'react-redux'
import { deleteTask, doneTask } from '../features/task/TaskSlice'
import TodoEdit from './TodoEdit'


const Task = ({ task }) => {
  const dispatch = useDispatch()
  return (
    <div className={`task ${task.isDone && 'task_done'}`}>

      <h3>{task.title}</h3>
      <p>{task.description}</p>

      {task.isDone ?
        <input type='checkbox' className='check' onChange={() => dispatch(doneTask(task))} checked />
        : <input type='checkbox' className='check' onChange={() => dispatch(doneTask(task))} unchecked />}

      <button className='fa-solid fa-trash-can' onClick={() =>dispatch(deleteTask(task))}><img src={del} alt='delete' /> </button>
      <TodoEdit id={task.id} />
    </div>
  )
}

export default Task