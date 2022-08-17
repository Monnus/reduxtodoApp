import {createSlice} from "@reduxjs/toolkit"

const initialState=[{id:"",text:""}]

 const ListSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      addNote: (state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.push(action.payload);
      },
      removeNoteAtIndex: (state,action) => {
        return [...state.slice]
      },
   
    }
  })


export const { addNote, removeNoteAtIndex, } = ListSlice.actions
export default ListSlice.reducer