import {createSlice} from "@reduxjs/toolkit";


export const slice = createSlice({
    name: 'charts',
    initialState: {
        charts: 'market%'
    },
    reducers: {
        selectionChartAC(state, action) {
            state.charts = action.payload
        }
    },
    extraReducers: {}
})

export const chartsReducer = slice.reducer
export const {selectionChartAC} = slice.actions