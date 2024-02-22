
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
            query: (id) => `/get-single-blog/${id}`,
        }),

        getBlog: builder.query({
            query: (id) => `/get-blog/${id}`,
            providesTags: ["UserBlog"]
        }),

        updateBlog: builder.mutation({
            query: ({ id, data }) => ({
                url: `/update-blog/${id}`,
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Blog"],
            invalidatesTags: ["UserBlog"]
        }),

        deleteBlog: builder.mutation({
            query: (id) => ({
                url: `/delete-blog/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Blog"],
            invalidatesTags: ["UserBlog"]
        })

    })
})

export const {
    useCreateBlogMutation,
    useAllBlogPostQuery,
    useGetSingleBlogQuery,
    useUpdateBlogMutation,
    useDeleteBlogMutation,
    useGetBlogQuery,
} = blogApi;