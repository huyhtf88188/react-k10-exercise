import axios from "axios";

const instance = axios.create({
  baseURL: "https://json-server-lj4u.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAll = async (path) => {
  try {
    const { data } = await instance.get(path);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getById = async (path, id) => {
  try {
    const { data } = await instance.get(`${path}/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeById = async (path, id) => {
  try {
    const res = await instance.delete(`${path}/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const create = async (path, data) => {
  try {
    const res = await instance.post(path, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};
export const updateById = async (path, id, data) => {
  try {
    const res = await instance.put(`${path}/${id}`, data);
    return res;
  } catch (err) {
    console.log(err);
  }
};

export default instance;
