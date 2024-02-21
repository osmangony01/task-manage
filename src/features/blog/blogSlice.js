import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    blog: undefined
}

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        allBlog: (state, action) => {
            state.blog = action.payload
        }
    }
})

export const { allBlog } = blogSlice.actions;
export default blogSlice.reducer;