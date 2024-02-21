
import { apiSlice } from "../apiSlice";


export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        allBlogPost: builder.query({
            query: () => "/all-blog-post",
            providesTags: ["Blog"]
        }),

        createBlog: builder.mutation({
            query: (data) => ({
                url: "/create-blog",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Blog"]
        }),

        getSingleBlog: builder.query({
            query: (id) => `/get-blog/${id}`
        }),

        updateBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-blog/${id}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Blog"]
        }),

        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/delete-blog/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Blog"]
        })

    })
})

export const {
    useCreateBlogMutation,
    useAllBlogPostQuery,
    useGetSingleBlogQuery,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
} = blogApi;