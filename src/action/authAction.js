export const REGISTER_USER = "REGISTER_USER";
export const DELETE_USER = "DELETE_USER";
export const SET_USER = "SET_USERS";

export const registerUser = (data) => ({ type: REGISTER_USER, payload: data });
export const deleteUser = (id) => ({ type: DELETE_USER, payload: id });
export const setUser = (data) => ({ type: SET_USER, payload: data });
