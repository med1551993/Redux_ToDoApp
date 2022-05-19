import { configureStore } from '@reduxjs/toolkit'
import ShowSlice from '../features/task/ShowSlice'
import TaskSlice from '../features/task/TaskSlice'

export default configureStore({
  reducer: {
    tasksTodo: TaskSlice,
    show: ShowSlice
  },
})