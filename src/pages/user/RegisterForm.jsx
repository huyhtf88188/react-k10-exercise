import { useNavigate } from "react-router-dom";
import { createNew } from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { userShemas } from "../../schemas/userShemas";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  let navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(userShemas),
  });

  const handleRegisterUser = async (dataUser) => {
    // console.log(dataUser);
    try {
      const res = await createNew("/register", dataUser);
      console.log("ok", res);
      if (res.accessToken !== "") {
        alert("đăng ký thành công");
        navigate("/user/login");
      }
    } catch (err) {
      console.log(err);
    }
    reset();
  };

  return (
    <div>
      <h1>Đăng ký Tài Khoản</h1>
      <form onSubmit={handleSubmit(handleRegisterUser)}>
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
            Email
          </label>
          <input
            className="form-control"
            type="email"
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
            Đăng Ký
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
