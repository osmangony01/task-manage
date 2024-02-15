import { apiSlice } from "../apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allTask: builder.query({
            query: () => "/task",
        }),

        getTask: builder.query({
            query: (id) => `/tasks/${id}`,
            providesTags: ["Task"]
        }),

        getSingleTask: builder.query({
            query: (id)=> `/single-task/${id}`
        }),

        addTask: builder.mutation({
            query: (data) => ({
                url: "/add-task",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Task"]
        }),

        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-task/${id}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Task"]
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/delete-task/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Task"]
        })
    })
})

export const {
    useAllTaskQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useGetSingleTaskQuery,
} = taskApi;