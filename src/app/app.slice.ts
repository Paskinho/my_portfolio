import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null,
        isLoading: true
    },
    reducers: {
        setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>)=> {
            state.isLoading = action.payload.isLoading
        }
    }

})

export const appReducer = slice.reducer
export const appActions = slice.actions