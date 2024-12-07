import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/authSchemas";
import { auth } from "../services/authServices";

const LoginForm = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(loginSchema),
  });
  const handleLogin = async (dataUser) => {
    try {
      const res = await auth("/login", dataUser);
      console.log(res.user.id);
      localStorage.setItem("accessToken", res.accessToken);
      localStorage.setItem("email", res.email);
      localStorage.setItem("userId", res.user.id);
      navigate("/homePage");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div>
        <h1>Đăng Nhập</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div>
            <label htmlFor="username">UserName</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              {...register("username", { required: true })}
            />
            {errors.username && <p>{errors.username?.message}</p>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p>{errors.email?.message}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              {...register("password", { required: true })}
            />
            {errors.password && <p>{errors.password?.message}</p>}
          </div>

          <div>
            <button type="submit">Đăng Nhập</button>
            <NavLink to="/user/register">Đăng Ký Nếu Chưa Có Tài Khoản</NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
