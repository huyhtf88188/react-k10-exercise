import { NavLink, useNavigate } from "react-router-dom";
import { createNew } from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { userShemas } from "../../schemas/userShemas";
import { useForm } from "react-hook-form";
import styles from "./registerForm.module.css";

const RegisterForm = () => {
  let navigate = useNavigate();
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(userShemas),
  });

  const handleRegisterUser = async (dataUser) => {
    try {
      const res = await createNew("/register", dataUser);
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
    <div className={styles.container}>
      <h1 className={styles.title}>Đăng ký Tài Khoản</h1>
      <form onSubmit={handleSubmit(handleRegisterUser)}>
        <div className={styles.formGroup}>
          <label htmlFor="username" className={styles.formLabel}>
            UserName
          </label>
          <input
            className={styles.formControl}
            type="text"
            name="username"
            id="username"
            placeholder="username"
            {...register("username", { required: true })}
          />
          {errors.username && (
            <p className={styles.textDanger}>{errors.username?.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.formLabel}>
            Email
          </label>
          <input
            className={styles.formControl}
            type="email"
            name="email"
            id="email"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className={styles.textDanger}>{errors.email?.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="password" className={styles.formLabel}>
            Password
          </label>
          <input
            type="password"
            className={styles.formControl}
            name="password"
            id="password"
            placeholder="********"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <p className={styles.textDanger}>{errors.password?.message}</p>
          )}
        </div>

        <div className={styles.formGroup}>
          <button type="submit" className={styles.btnPrimary}>
            Đăng Ký
          </button>
          <NavLink to="/user/login" className={styles.link}>
            Đăng nhập nếu bạn đã có tài khoản
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
