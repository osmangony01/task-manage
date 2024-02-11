import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/apiSlice";
import userSliceReducer from "./features/curd-api/userSlice";

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath] : apiSlice.reducer,
        users: userSliceReducer
    },

    middleware: (getDefaultMiddlewares) => 
        getDefaultMiddlewares().concat(apiSlice.middleware)
    
})