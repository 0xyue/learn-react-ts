import {configureStore} from "@reduxjs/toolkit";
import tabbarReducer from "./slice/tabbarSlice";


const store = configureStore({
    reducer: {
        tabbar: tabbarReducer
    }
})

export default store