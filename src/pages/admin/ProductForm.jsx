import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { createNew, getById, updateById } from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { schemaProduct } from "../../schemas/productShemas";
import styles from "./producForm.module.css";

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(schemaProduct),
  });

  useEffect(() => {
    if (id) {
      (async () => {
        const data = await getById("/products", id);
        reset(data);
      })();
    }
  }, [id, reset]);

  const handleAddProduct = async (product) => {
    try {
      if (id) {
        await updateById("/products", id, product);
      } else {
        await createNew("/products", product);
      }
      const action = id ? "Cập nhật" : "Thêm mới";
      const confirmNavigation = window.confirm(
        `${action} thành công. Chuyển đến trang danh sách sản phẩm?`
      );

      if (confirmNavigation) {
        navigate("/admin/products");
      } else if (id) {
        const updatedData = await getById("/products", id);
        reset(updatedData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{id ? "Cập nhật" : "Thêm mới"} sản phẩm</h1>
      <form onSubmit={handleSubmit(handleAddProduct)} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="title" className={styles.label}>
            Title
          </label>
          <input
            className={styles.input}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className={styles.error}>{errors.title?.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="price" className={styles.label}>
            Price
          </label>
          <input
            className={styles.input}
            type="number"
            name="price"
            id="price"
            placeholder="Price"
            {...register("price", { required: true, valueAsNumber: true })}
          />
          {errors.price && (
            <p className={styles.error}>{errors.price?.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description" className={styles.label}>
            Description
          </label>
          <textarea
            className={styles.textarea}
            name="description"
            id="description"
            placeholder="Description"
            {...register("description", { required: true })}
          />
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            className={`${styles.button} btn btn-secondary`}
            onClick={() => reset()}
          >
            Nhập lại
          </button>
          <button type="submit" className={`${styles.button} btn btn-primary`}>
            {id ? "Cập nhật" : "Thêm mới"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
