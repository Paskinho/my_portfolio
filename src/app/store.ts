import {configureStore} from "@reduxjs/toolkit";
import {appReducer} from "./app.slice";


export const store = configureStore({
    reducer: {
        app: appReducer
    }
})