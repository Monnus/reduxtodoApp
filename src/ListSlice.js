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
    
       
     if(state){
return [...state,action.payload];
     }
      state.push(action.payload)
      },
      bringBackReads: (state,action) => {
     
        if(state){
          return [...state,action.payload];
               }
          state.push(action.payload)
      },
      incrementByAmount: (state, action) => {
        state.value += action.payload
      }
    }
  })

console.log(noteSlice.reducer);
export const { sendReadwrite, bringBackReads } = noteSlice.actions
export default noteSlice.reducer