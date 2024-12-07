import { NavLink } from "react-router-dom";
import { getAll, removeById, updateById } from "../services/crudServices";
import { useEffect, useState } from "react";

const HomePage = () => {
  const userId = localStorage.getItem("userId");
  const [usertodo, setUsertodo] = useState([]);
  const [reload, setReload] = useState(false);

  useEffect(() => {
    (async () => {
      const userTodoList = await getAll(`/todolist?usersId=${+userId}`);
      setUsertodo(userTodoList);
    })();
  }, [reload]);

  const handleRemoveTodo = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await removeById("/todolist", id);
      if (res.status === 200) {
        console.log(res);
        const newTodoList = usertodo.filter((item) => item.id !== id);
        setUsertodo(newTodoList);
      }
    }
  };

  const handleUpdateStatus = async (id, currentStatus) => {
    const newStatus = currentStatus === "pending" ? "done" : "pending";

    try {
      const res = await updateById("/todolist", id, { status: newStatus });

      if (res.status === 200) {
        const updatedTodos = usertodo.map((todo) => {
          if (todo.id === id) {
            return { ...todo, status: newStatus };
          }
          return todo;
        });

        setUsertodo(updatedTodos);
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>TodoList</h1>

        <NavLink to="/homePageForm">Add new Todo</NavLink>
        <table>
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Priority</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usertodo.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.priority}</td>
                <td>
                  <label
                    htmlFor="status"
                    onClick={() => handleUpdateStatus(item.id, item.status)}
                  >
                    <input
                      type="checkbox"
                      name="status"
                      id="status"
                      value="status"
                    />
                    {item.status}
                  </label>
                </td>
                <td>
                  <button onClick={() => handleRemoveTodo(item.id)}>
                    Remove
                  </button>
                  <NavLink to={`/homePageForm/${item.id}`}>Update</NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
