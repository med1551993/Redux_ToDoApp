import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showAll, showDone, showMenu, showNotDone } from '../features/task/ShowSlice'
import "../App.css"


const AddTask = () => {
  const dispatch = useDispatch()
  /* const list = useSelector((el)=> el.tasksTodo.todoList) */
  const show = useSelector((el)=> el.show)
  return (
    <div className='add'>
      <h1 className='title'> What have you planned for today </h1>
      <div className='bttn' >
        <button className='add_button' onClick={() => dispatch(showMenu(show))}>Add Task </button>

        <div className="dropdown">
          <button className="dropbtn">Change Display </button>
          <div className="dropdown-content">
            <span onClick={() => dispatch(showAll())}>Schow All</span>
            <span onClick={() => dispatch(showDone())}>Done</span>
            <span onClick={() => dispatch(showNotDone())}>Not Done</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddTask