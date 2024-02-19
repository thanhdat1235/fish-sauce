import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    productPath: [
      {
        params: { slug: "", name: "" },
      },
    ],
  },
  reducers: {
    setPathProduct: (state, action) => {
      state.productPath = action.payload;
    },
  },
});

export const { setPathProduct } = productSlice.actions;
export default productSlice.reducer;
