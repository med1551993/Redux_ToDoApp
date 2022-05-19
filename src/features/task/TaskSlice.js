import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todoList: [] 
}

export const TaskSlice = createSlice({
  name: 'tasksTodo',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todoList.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.todoList = state.todoList.filter((el) => el.id !== action.payload.id)
    },
    updateTask: (state, action) => {

      let i = state.todoList.findIndex((el) => el.id === action.payload.id)
      state.todoList[i] = { ...state.todoList[i], title: action.payload.edit.title, description: action.payload.edit.description } 
      
    },
    doneTask: (state, action) => {
      let i = state.todoList.findIndex((el) => el.id === action.payload.id)
      state.todoList[i].isDone = !state.todoList[i].isDone
    },
  },
})

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, updateTask, doneTask } = TaskSlice.actions

export default TaskSlice.reducer