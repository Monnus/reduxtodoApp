import {configureStore } from "@reduxjs/toolkit"
import  counterReducer from "../src/ListSlice"

export default configureStore({
    reducer:{}
})
console.log(counterReducer);