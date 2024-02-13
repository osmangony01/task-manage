import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    task: undefined
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        allTask: (state, action) => {
            state.task = action.payload
        }
    }
})

export const { allTask } = taskSlice.actions;
export default taskSlice.reducer;