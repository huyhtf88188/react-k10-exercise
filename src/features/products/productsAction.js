import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createProduct,
  getALlProduct,
  getByID,
  removeProduct,
  updateProduct,
} from "../../services/productServices";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      return await getALlProduct();
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchProductsById = createAsyncThunk(
  "products/fetchProductsById",
  async (id) => {
    try {
      return await getByID(id);
    } catch (err) {
      console.log(err);
    }
  }
);
export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (data) => {
    try {
      return await createProduct(data);
    } catch (err) {
      console.log(err);
    }
  }
);
export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async ({ id, payload }, { rejectWithValue }) => {
    try {
      return await updateProduct({ id, payload });
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);
export const deleteProduct = createAsyncThunk(
  "products/deleteProduct",
  async (id) => {
    try {
      return await removeProduct(id);
    } catch (err) {
      console.log(err);
    }
  }
);
