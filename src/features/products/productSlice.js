import { createSlice } from "@reduxjs/toolkit";
import {
  createProducts,
  fetchProducts,
  deleteProduct,
  fetchProductsById,
  updateProducts,
} from "./productsAction";

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
      .addCase(createProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
      .addCase(updateProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.map((item) =>
          item.id === action.payload.id ? action.payload : item
        );
      })
      .addCase(updateProducts.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
      .addCase(deleteProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        state.products = state.products.filter(
          (item) => +item.id !== +action.payload
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      })
      .addCase(fetchProductsById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductsById.fulfilled, (state, action) => {
        state.loading = false;

        state.products = action.payload;
      })
      .addCase(fetchProductsById.rejected, (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

const productReducer = productSlice.reducer;

export default productReducer;
