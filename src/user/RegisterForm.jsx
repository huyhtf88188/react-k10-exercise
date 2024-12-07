import { NavLink, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { auth } from "../services/authServices";
import { registerSchema } from "../schema/authSchemas";

const RegisterForm = () => {
  let navigate = useNavigate();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleRegisterUser = async (dataUser) => {
    try {
      const res = await auth("/register", dataUser);
      console.log("ok", res);
      if (res?.accessToken) {
        alert("đăng ký thành công, chuyển đến trang đăng nhập");
        navigate("/user/login");
      } else {
        alert("đăng ký thất bại");
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Đăng ký Tài Khoản</h1>
      <form onSubmit={handleSubmit(handleRegisterUser)}>
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
            type="email"
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
          <button type="submit">Đăng Ký</button>
          <NavLink to="/user/login">Đăng nhập nếu bạn đã có tài khoản</NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
