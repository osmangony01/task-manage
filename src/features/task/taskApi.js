import { apiSlice } from "../apiSlice";

export const taskApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allTask: builder.query({
            query: () => "/task",
        }),

        getTask: builder.query({
            query: (id) => `/task/${id}`
        }),

        addTask: builder.mutation({
            query: (data) => ({
                url: "/add-task",
                method: "POST",
                body: data
            }),
        }),

        updateTask: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-task/${id}`,
                method: "POST",
                body: data
            }),
        }),

        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/delete-task/${id}`,
                method: "DELETE"
            }),
        })
    })
})

export const {
    useAllTaskQuery,
    useGetTaskQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = taskApi;