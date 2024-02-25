import { apiSlice } from "../apiSlice";

export const commentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allComment: builder.query({
            query: (id) => `/all-comment/${id}`
        }),

        addComment: builder.mutation({
            query: (data) => ({
                url: '/add-comment',
                method: "POST",
                body: data,
            })
        }),

        updateComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-comment/${id}`,
                method: "POST",
                body: data,
            })
        }),

        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/delete-comment/${id}`,
                method: "DELETE"
            })
        })

    })
});

export const {
    useAllCommentQuery,
    useAddCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
} = commentApi;