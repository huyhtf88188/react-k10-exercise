import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../schema/authSchema";
import instance from "../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let nav = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (datas) => {
    try {
      const { data } = await instance.post("/login", datas);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("role", data.user.role);

      if (data.user.role === "admin") {
        nav("/admin");
      } else {
        nav("/homepage");
      }
    } catch (err) {
      toast.error("email hoặc mật khẩu không đúng");
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Login Page
      </h1>
      <form
        action=""
        className="form-group"
        onSubmit={handleSubmit(handleLogin)}
      >
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="form-control"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-3">
          <Link to="/login">Bạn Đã Có Tài Khoản?</Link>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
