import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../schema/authSchema";
import { useDispatch } from "react-redux";
import { registerUser } from "../action/authAction";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import instance from "../axios/axios";

const Register = () => {
  const dispatch = useDispatch();
  let nav = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const handleRegister = async (data) => {
    try {
      const confirmRegister = confirm(
        "đăng ký thành công. chuyển đến trang đăng nhập?"
      );
      await instance.post("/register", data);
      dispatch(registerUser(data));

      if (confirmRegister) {
        nav("/login");
      } else {
        reset();
      }
    } catch (err) {
      toast.error("email đã được đăng ký");
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5" style={{ textAlign: "center" }}>
        Register Page
      </h1>
      <form
        action=""
        className="form-group"
        onSubmit={handleSubmit(handleRegister)}
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
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className="text-danger">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirm" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm"
            className="form-control"
            {...register("confirm", { required: true })}
          />
          {errors.confirm && (
            <p className="text-danger">{errors.confirm.message}</p>
          )}
        </div>
        <div className="mb-3">
          <Link to="/login">Bạn Chưa Có Tài Khoản?</Link>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary w-100">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
