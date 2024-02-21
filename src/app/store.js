import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/features/apiSlice";
import authSliceReducer from "@/features/auth/authSlice";
import blogSliceReducer from "@/features/blog/blogSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSliceReducer,
        blog: blogSliceReducer,
    },
    
    middleware: (getDefaultMiddlewares) =>
        getDefaultMiddlewares().concat(apiSlice.middleware)

})