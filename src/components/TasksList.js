import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task';

const TasksList = () => {  
    const todo = useSelector((el) => el.tasksTodo.todoList)
    const show_Done = useSelector((el) => el.show.show_Done)
    const show_All = useSelector((el) => el.show.show_All)
    

    return (
        <div className='list'>

           {show_All ? todo.map((task) => <Task task={task}/>) : show_Done ? todo.filter((el) => el.isDone === true).map((task) => <Task task={task}/>)
            : todo.filter((el) => el.isDone === false).map((task) => <Task task={task}/>)}
         
            
        </div>
    )
}

export default TasksList