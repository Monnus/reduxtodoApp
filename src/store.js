import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "../src/ListSlice"

console.log(notesReducer);
export default configureStore({
    reducer:{
        notes: notesReducer,

    }
})