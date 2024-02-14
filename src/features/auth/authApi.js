
import { apiSlice } from "../apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
        }),

        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.access_token,
                            user: result.data.user,
                        }),
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.access_token,
                            user: result.data.user
                        })
                    )
                } catch (error) {
                    console.log(error);
                }
            }
        }),
    })
})

export const { useLoginMutation, useRegisterMutation } = authApi;