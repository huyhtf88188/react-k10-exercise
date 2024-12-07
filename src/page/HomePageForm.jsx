import { useForm } from "react-hook-form";
import { createNew, getById, updateById } from "../services/crudServices";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { todolistSchema } from "../schema/todoListSchema";

const HomePageForm = () => {
  //   const [todoValue, setTodovalue] = useState([]);
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
        await updateById("/todolist", id, todolist);
      } else {
        const userIdCreat = localStorage.getItem("userId");
        todolist.status = "pending";
        todolist.usersId = +userIdCreat;
        if (userIdCreat) {
          await createNew("/todolist", todolist);
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
            <select name="priority" id="priority">
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
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
