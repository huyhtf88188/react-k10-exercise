import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { productSchema } from "../schema/productSchema";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

import {
  createProducts,
  fetchProductsById,
  updateProducts,
} from "../features/products/productsAction";
import { toast } from "react-toastify";

const ProductsForm = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let nav = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
  });

  useEffect(() => {
    (async () => {
      try {
        if (id) {
          const res = await dispatch(fetchProductsById(id)).unwrap();
          reset(res);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id, reset]);

  const handleSubmitForm = async (payload) => {
    try {
      if (id) {
        // const newProduct = await instance.patch(`/products/${id}`, data);
        // console.log(newProduct);
        dispatch(updateProducts({ id, payload }));
        nav("/admin/products");
      } else {
        dispatch(createProducts(payload));
        nav("/admin/products");
      }
    } catch (err) {
      toast.error("không thành công");
    }
  };
  return (
    <div className="container">
      <h1>{id ? "Update" : "Add"} Products</h1>
      <form action="" onSubmit={handleSubmit(handleSubmitForm)}>
        <div className="form-group mb-3">
          <label htmlFor="title" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.price && (
            <p className="text-danger">{errors.price.message}</p>
          )}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="description" className="form-label">
            title
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className="text-danger">{errors.description.message}</p>
          )}
        </div>
        <div className="mb3">
          <button className="btn btn-primary w-100">
            {id ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
