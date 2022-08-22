import {createSlice} from "@reduxjs/toolkit"

const initialState=[];
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      sendReadwrite: state => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
      return state
      },
      bringBackReads: state => {

      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })

console.log(noteSlice.reducer);
export const { sendReadwrite, bringBackReads } = noteSlice.actions
export default noteSlice.reducer