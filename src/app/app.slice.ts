import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null
    },
    reducers: {}

})

export const appReducer = slice.reducer