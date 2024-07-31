
import { configureStore } from "@reduxjs/toolkit";
import { habbitReducer } from "../Reducer/habitReducer";


export const store = configureStore({
    reducer:{
        habbitReducer
    }
})

