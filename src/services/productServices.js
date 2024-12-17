import instance from "../axios/axios";

export const getALlProduct = async () => {
  const { data } = await instance.get("/products");
  return data;
};
export const createProduct = async (product) => {
  const { data } = await instance.post("/products", product);
  return data;
};
export const updateProduct = async ({ id, payload }) => {
  const { data } = await instance.patch(`/products/${id}`, payload);
  return data;
};
export const removeProduct = async (id) => {
  await instance.delete(`/products/${id}`);
  return id;
};
export const getByID = async (id) => {
  const { data } = await instance.get(`/products/${id}`);
  console.log(data);
  return data;
};
