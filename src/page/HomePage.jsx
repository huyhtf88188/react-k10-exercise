import { NavLink } from "react-router-dom";
import { getAll, removeById, updateById } from "../services/crudServices";
import { useEffect, useState } from "react";
import styles from "./homePage.module.css";

const HomePage = () => {
  const userId = localStorage.getItem("userId");
  const [usertodo, setUsertodo] = useState([]);
  const [usertodoDone, setUsertodoDone] = useState([]);

  useEffect(() => {
    (async () => {
      const userTodoList = await getAll(`/todolist?usersId=${+userId}`);
      setUsertodo(userTodoList);
    })();
  }, []);

  useEffect(() => {
    const todoDone = usertodo.filter((item) => item.status === "pending");
    setUsertodoDone(todoDone);
  }, [usertodo]);

  const handleRemoveTodo = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await removeById("/todolist", id);
      if (res.status === 200) {
        const newTodoList = usertodo.filter((item) => item.id !== id);
        setUsertodo(newTodoList);
      }
    }
  };

  const handleUpdateStatus = async (event, id) => {
    const newStatus = event.target.checked ? "done" : "pending";
    try {
      const data = await updateById("/todolist", id, { status: newStatus });
      if (data) {
        const updatedTodos = usertodo.map((todo) => {
          if (todo.id === id) {
            return { ...todo, status: newStatus };
          }
          return todo;
        });
        setUsertodo(updatedTodos);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1>TodoList</h1>
      <h2 style={{ color: "Red" }}>
        Hiện Tại Tổng Số Công Việc Chưa Hoàn Thành Là : {usertodoDone.length}
      </h2>
      <NavLink to="/homePageForm" className={styles.addLink}>
        Add new Todo
      </NavLink>
      <table className={styles.table}>
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
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
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  id={`status-${item.id}`}
                  checked={item.status === "done"}
                  onChange={(event) => handleUpdateStatus(event, item.id)}
                />
                <label htmlFor={`status-${item.id}`}>{item.status}</label>
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
  );
};

export default HomePage;
