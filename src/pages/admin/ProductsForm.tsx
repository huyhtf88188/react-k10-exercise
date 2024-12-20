import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import instance from "../../services/index.js";
import { useAppDispatch } from "../../hooks/index.js";
import { fetchProductById } from "../../features/products/productActions.js";
import { IProduct } from "../../interfaces/IProduct.js";
import { productSchema } from "../../schemas/index";

const ProductsForm = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const nav = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      title: "",
      price: 0,
      description: "",
    },
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const idProduct = Number(id);
        const data = await dispatch(
          fetchProductById({ id: idProduct })
        ).unwrap();
        reset(data);
      }
    })();
  }, []);

  const handleGetData = async (dataBody: IProduct) => {
    if (id) {
      const updateConfirm = confirm(
        "cập nhật thành công, chuyển đến trang sản phẩm?"
      );
      if (updateConfirm) {
        await instance.patch(`/products/${id}`, dataBody);
        nav("/admin/products");
      }
    } else {
      const addConfirm = confirm(
        "thêm mới thành công, chuyển đến trang sản phẩm?"
      );
      await instance.post("/products", dataBody);
      if (addConfirm) {
        nav("/admin/products");
      } else {
        reset({ title: "", price: 0, description: "" });
      }
    }
  };

  return (
    <div className="container">
      <h1>{id ? "Update" : "Add"}</h1>
      <Link to="products/add">Add Product</Link>
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          handleGetData(data);
        })}
      >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            {...register("title")}
          />
          {errors.title && (
            <p className="text-danger">{errors.title.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price", { valueAsNumber: true })}
          />
          {errors.title && (
            <p className="text-danger">{errors.price?.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            {...register("description")}
          />
        </div>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        <div className="mb-3">
          <button className="btn btn-danger">{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
