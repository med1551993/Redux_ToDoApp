import { createSlice } from '@reduxjs/toolkit'
 const initialState = {
   show:false ,
   show_Done:false,
   show_All: true,
   }

export const ShowSlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
  showMenu: (state) => {
   state.show = !state.show;
  },
  showAll: (state) => {
    state.show_All = true;
   },
  showDone: (state) => {
    state.show_Done = true;
    state.show_All = false;
   },
   showNotDone: (state) => {
    state.show_Done = false;
    state.show_All = false;
   },
},
})

// Action creators are generated for each case reducer function
export const {showMenu,showDone,showNotDone,showAll} = ShowSlice.actions

export default ShowSlice.reducer