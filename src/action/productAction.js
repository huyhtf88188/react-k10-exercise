export const SET_PRODUCT = "SET_PRODUCT";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const setProduct = (value) => ({ type: SET_PRODUCT, payload: value });
export const addProduct = (value) => ({ type: ADD_PRODUCT, payload: value });
export const updateProduct = (value) => ({
  type: UPDATE_PRODUCT,
  payload: value,
});
export const removeProduct = (value) => ({
  type: REMOVE_PRODUCT,
  payload: value,
});
