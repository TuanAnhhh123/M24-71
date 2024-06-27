import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducer/countReducer";
import todolistReducer from "./reducer/todolistReducer";
import counterSlice from "./reducer/b1"
import numberListReducer from "./reducer/b2"
import themeReducer from './reducer/b3';
import displayModeReducer from './reducer/b4';
const store  = configureStore({
    reducer:{
        countReducer,
        todolistReducer,
        counterSlice,
        numberListReducer,
        themeReducer,
        displayModeReducer
    }
})
export default store;