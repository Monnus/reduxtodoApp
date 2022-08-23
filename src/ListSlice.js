import {createSlice} from "@reduxjs/toolkit"
import { getDatabase,ref,set } from "firebase/database";
import "../firebaseconfig"
const db=getDatabase()
const initialState=[];
export const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
      sendReadwrite: (state,action) => {
        console.log(action);
        // ref(db,"notes/"+action.payload.loggedIn).set({
        //   date:action.payload.data,
        //   title:action.payload.title,
        //    text:action.payload.text   
        // })
      state.push(action.payload)
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