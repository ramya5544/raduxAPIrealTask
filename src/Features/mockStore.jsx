import { configureStore } from "@reduxjs/toolkit";
import mockReducer from './MockSlice'
export const store=configureStore({
    reducer:{
        mockApiReducer:mockReducer
    }
})