import { useForm } from "react-hook-form";
import { createNew, getById, updateById } from "../services/crudServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { todolistSchema } from "../schema/todoListSchema";

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
    console.log("Submitted data:", todolist);
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
    <div>
      <div>
        <h1>{id ? "Update" : "Add "} TodoList</h1>

        <form onSubmit={handleSubmit(handleTodoList)}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              {...register("title", { required: true })}
            />
            {errors.title && <p>{errors.title?.message}</p>}
          </div>

          <div>
            <label htmlFor="description">description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="description"
              {...register("description", {
                required: true,
              })}
            />
            {errors.description && <p>{errors.description?.message}</p>}
          </div>

          <div>
            Priority
            <select
              name="priority"
              id="priority"
              defaultValue={"easy"}
              {...register("priority", { required: true })}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            {errors.priority && <p>{errors.priority.message}</p>}
          </div>

          <div>
            <button type="button" onClick={() => reset()}>
              Nhập lại
            </button>
            <button type="submit">{id ? "Update" : "Add"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePageForm;
