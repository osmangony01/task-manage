import { apiSlice } from "../apiSlice";

export const commentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allComment: builder.query({
            query: (id) => `/all-comment/${id}`,
            providesTags: ["Comment"]
        }),

        addComment: builder.mutation({
            query: (data) => ({
                url: '/add-comment',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Comment"]
        }),

        updateComment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-comment/${id}`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Comment"]
        }),

        deleteComment: builder.mutation({
            query: (id) => ({
                url: `/delete-comment/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Comment"]
        })

    })
});

export const {
    useAllCommentQuery,
    useAddCommentMutation,
    useUpdateCommentMutation,
    useDeleteCommentMutation,
} = commentApi;