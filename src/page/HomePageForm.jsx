import { useForm } from "react-hook-form";
import { createNew, getById, updateById } from "../services/crudServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { todolistSchema } from "../schema/todoListSchema";
import styles from "./homePageForm.module.css";
const HomePageForm = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(todolistSchema),
  });

  useEffect(() => {
    (async () => {
      if (id) {
        const todo = await getById("/todolist", id);
        reset(todo);
      }
    })();
  }, [id]);

  const handleTodoList = async (todolist) => {
    try {
      if (id) {
        const userConfirmed = confirm(
          "Cập nhật thành công, bạn có muốn chuyển đến danh sách việc làm?"
        );
        if (userConfirmed) {
          navigate("/homePage");
        }
        await updateById("/todolist", id, todolist);
      } else {
        const userIdCreat = localStorage.getItem("userId");
        todolist.status = "pending";
        todolist.usersId = +userIdCreat;
        if (userIdCreat) {
          await createNew("/todolist", todolist);
          const userConfirmed = confirm(
            "Thêm mới thành công, bạn có muốn chuyển đến danh sách việc làm?"
          );
          if (userConfirmed) {
            navigate("/homePage");
          }
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>{id ? "Update" : "Add"} TodoList</h1>

      <form onSubmit={handleSubmit(handleTodoList)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <p className={styles["error-message"]}>{errors.title.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <p className={styles["error-message"]}>
              {errors.description.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            defaultValue="easy"
            {...register("priority", { required: true })}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.priority && (
            <p className={styles["error-message"]}>{errors.priority.message}</p>
          )}
        </div>

        <div>
          <button type="button" onClick={() => reset()}>
            Reset
          </button>
          <button type="submit">{id ? "Update" : "Add"}</button>
        </div>
      </form>
    </div>
  );
};

export default HomePageForm;
