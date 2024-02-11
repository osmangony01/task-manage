import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    users:undefined
}

const userSlice = createSlice({
    name: "users",
    initialState,
    reducers:{
        allUser: (state, action) => {
            state.users = action.payload
        }
    }
})

export const {allUser} = userSlice.actions;
export default userSlice.reducer;