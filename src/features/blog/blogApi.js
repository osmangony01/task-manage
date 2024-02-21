
import { apiSlice } from "../apiSlice";


export const blogApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createBlog: builder.mutation({
            query: (data) => ({
                url: "/create-blog",
                method: "POST",
                body: data
            }),
        }),
    })
})

export const { useCreateBlogMutation } = blogApi;