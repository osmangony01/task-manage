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
            query: ({ id, data }) => ({
                url: `/update-user/${id}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["User"]
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: `/delete-user/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["User"]
        })
    })
})

export const {
    useAllUserQuery,
    useUserAddMutation,
    useUserUpdateMutation,
    useGetUserQuery,
    useDeleteUserMutation
} = userApi;