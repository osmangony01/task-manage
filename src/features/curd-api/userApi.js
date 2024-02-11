import { apiSlice } from "../apiSlice";

export const userApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        allUser: builder.query({
            query: () => "/users",
            providesTags: ["User"]
        }),

        getUser: builder.query({
            query: (id) => `/users/${id}`
        }),

        userAdd: builder.mutation({
            query: (data) => ({
                url: "/add-user",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),

        userUpdate: builder.mutation({
            query: ({id, data}) => ({
                url: `/update-user/${id}`,
                method: "POST",
                body: data
            }),
        }),


    })
})

export const { useAllUserQuery, useUserAddMutation, useUserUpdateMutation, useGetUserQuery } = userApi;