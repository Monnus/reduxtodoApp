import {configureStore} from "@reduxjs/toolkit";
import notesReducer from "./ListSlice";

console.log(notesReducer);
export default configureStore({
    reducer:{
        notes: notesReducer,

    }
})