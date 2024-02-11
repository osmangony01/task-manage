import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allUser: builder.query({
            query: () => "/users"
        }),

        userAdd: builder.mutation({
            query: (data) => ({
                url: "/add-user",
                method: "POST",
                body: data
            })
        }),

        userUpdate: builder.mutation({
            query: (data) => ({
                url: "/update-user",
                method: "PUT",
                body: data
            })
        }),


    })
})

export const { useAllUserQuery, useUserAddMutation, useUserUpdateMutation } = userApi;