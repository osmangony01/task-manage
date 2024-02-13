import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: undefined
};

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        userLoggedIn: (state, action) => {
            state.user = action.payload;
        },
        userLoggedOut: (state, action) => {
            state.user = undefined;
        }
    }
})

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;