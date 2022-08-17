import {configureStore } from "@reduxjs/toolkit"
import notesReducer from "./ListSlice"

export default configureStore({
    reducer: {
        notes: notesReducer
      }
})