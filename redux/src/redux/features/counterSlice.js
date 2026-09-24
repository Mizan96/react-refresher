import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increament: (state)=>{
            state.value += 1
        },
        decreament: (state)=>{
            state.value -= 1
        },
        increamentByAmount: (state, actions)=>{
            state.value += actions.payload
        }
    }
})

export const {increament, decreament, increamentByAmount} = counterSlice.actions
export default counterSlice.reducer