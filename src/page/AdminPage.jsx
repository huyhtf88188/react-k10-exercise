import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, setUser } from "../action/authAction";
import instance from "../axios/axios";

const AdminPage = () => {
  const state = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/users");
      dispatch(setUser(data));
    })();
  }, []);

  const handleRemoveUser = async (id) => {
    try {
      await instance.delete(`/users/${id}`);
      dispatch(deleteUser(id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Danh Sách User</h1>
        <table className="table-bordered table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {state.users &&
              state.users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.email}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleRemoveUser(item.id);
                        }}
                      >
                        CÚT
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminPage;
