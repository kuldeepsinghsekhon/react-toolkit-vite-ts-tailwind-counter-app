import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from "./features/counter/counterSlice.tsx";
export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});