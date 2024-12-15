import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { productSchema } from "../schema/productSchema";
import { addProduct, updateProduct } from "../action/productAction";
import instance from "../axios/axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
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
          const { data } = await instance.get(`products/${id}`);
          reset(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleSubmitForm = async (data) => {
    try {
      if (id) {
        const newProduct = await instance.patch(`/products/${id}`, data);
        console.log(newProduct);
        dispatch(updateProduct(data));
        nav("/admin/products");
      } else {
        await instance.post("/products", data);
        dispatch(addProduct(data));
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
