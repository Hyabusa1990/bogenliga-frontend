import {configureStore} from "@reduxjs/toolkit";
import {ligaSlice} from "./reducer/ligaSlice";

export const store = configureStore({
    reducer: {liga: ligaSlice.reducer},
})