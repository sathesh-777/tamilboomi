import { apiSlice } from "../api/apiSlice";

export const BlogsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBlog: builder.mutation({
      query: (data) => ({
        url: "create-blog",
        method: "POST",
        body: data,
        credentials: "include" as const,
      }),
    }),
    getAllBlogs: builder.query({
      query: () => ({
        url: "get-all-blogs",
        method: "GET",
        credentials: "include" as const,
      }),
    }),
    getSingleBlog: builder.query({
      query: ({id}) => ({
        url: `get-blog/${id}`,
        method: "GET",
        credentials: "include" as const,
      }),
    }),
  }),
});

export const { useCreateBlogMutation, useGetAllBlogsQuery,useGetSingleBlogQuery } = BlogsApi;
