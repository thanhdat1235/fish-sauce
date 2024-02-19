import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogPath: [
      {
        params: { slug: "", name: "" },
      },
    ],
  },
  reducers: {
    setPathBlog: (state, action) => {
      state.blogPath = action.payload;
    },
  },
});

export const { setPathBlog } = blogSlice.actions;
export default blogSlice.reducer;
