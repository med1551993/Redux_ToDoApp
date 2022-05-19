import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showMenu } from '../features/task/ShowSlice';
import { addTask } from '../features/task/TaskSlice';

const AddMenu = () => {
    const show = useSelector((el)=> el.show)
    
    const dispatch = useDispatch()
    const [task, setTask] = useState({
        id: Math.random(),
        title: '',
        description: '',
        isDone: false
    });
   
    return (
        <div className='add_menu_1'>

            <div className='add_menu_2'>
                <button className='btn_x' onClick={() =>dispatch(showMenu(show))}> X </button>
                <input        
                    type='text'
                    placeholder='Enter the title'
                    onChange={(e) => setTask({ ...task, title: e.target.value })} />
                <input
                    type='text'
                    placeholder='Enter your task here'
                    onChange={(e) => setTask({ ...task, description: e.target.value })} />
                <button className='add2' onClick={() =>dispatch(addTask(task)) & dispatch(showMenu(show))}> Add </button>
            </div>

        </div>
    )
}

export default AddMenu