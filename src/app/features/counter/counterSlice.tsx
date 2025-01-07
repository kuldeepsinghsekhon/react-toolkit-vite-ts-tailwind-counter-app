import { createSlice } from '@reduxjs/toolkit'
// Define the state interface
interface CounterState {
    count: number
  }
  
  // Initial state
  const initialState: CounterState = {
    count: 0
  }
  
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {state.count += 1},
        decrement: (state) =>{ state.count -= 1},
        resetAll: (state) => {state.count = 0 },
        incrementByValue: (state, action) => {state.count += action.payload},
       },
    })
    export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;