import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { getAll } from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { userShemas } from "../../schemas/userShemas";

const LoginForm = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userShemas),
  });
  const handleLogin = async (dataUser) => {
    console.log(dataUser);

    try {
      if (
        dataUser.email === "hhhoanghuy@yahoo.com" ||
        dataUser.username === "hhhoanghuy"
      ) {
        navigate("/admin/products");
      }

      const res = await getAll("/users");
      const idlogin = res.find(
        ({ username, email }) =>
          username === dataUser.username && email === dataUser.email
      );
      if (idlogin) {
        navigate("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
      }

      console.log(idlogin);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div className="form-group">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            className="form-control"
            type="text"
            name="username"
            id="username"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username?.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            className="form-control"
            type="text"
            name="email"
            id="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email?.message}</p>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password?.message}</p>
          )}
        </div>

        <div className="form-group">
          <button type="submit" className="btn btn btn-primary">
            Đăng Nhập
          </button>
          <NavLink to="/user/register">
            <button type="submit" className="btn btn btn-danger">
              Đăng Ký
            </button>
          </NavLink>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
