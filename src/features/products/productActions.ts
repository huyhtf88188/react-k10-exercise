import { createAsyncThunk } from "@reduxjs/toolkit";

import instance from "../../services";
import { IProduct } from "../../interfaces/IProduct";

export const fetchProducts = createAsyncThunk<IProduct[]>(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await instance.get("/products");
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const fetchProductById = createAsyncThunk<IProduct, { id: number }>(
  "products/fetchProductById",
  async ({ id }, { rejectWithValue }) => {
    try {
      console.log(id);
      const { data } = await instance.get(`/products/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const createProduct = createAsyncThunk<IProduct, IProduct>(
  "/products/createProducts",
  async (product) => {
    const { data } = await instance.post("/products", product);
    return data;
  }
);

export const editProduct = createAsyncThunk<IProduct, IProduct>(
  "products/editProduct",
  async ({ id, ...product }) => {
    const { data } = await instance.patch(`/products/${id}`, product);
    return data;
  }
);

export const removeProduct = createAsyncThunk<number, number>(
  "/products/removeProduct",
  async (id: number) => {
    await instance.delete(`/products/${id}`);
    return id;
  }
);
