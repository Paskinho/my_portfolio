import { createSlice } from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        isLoading: true
    },
    reducers: {}

})

export const appReducer = slice.reducer
export const appActions = slice.actions