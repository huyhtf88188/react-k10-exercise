import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { getAll } from "../../axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { userShemas } from "../../schemas/userShemas";
import styles from "./registerForm.module.css";

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
    try {
      const res = await getAll("/users");
      const idlogin = res.find(
        ({ username, email }) =>
          username === dataUser.username && email === dataUser.email
      );
      console.log(res);
      if (
        dataUser.email === "hhhoanghuy@yahoo.com" ||
        dataUser.username === "hhhoanghuy"
      ) {
        navigate("/admin/products");
      } else if (idlogin) {
        navigate("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không chính xác");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Đăng Nhập</h1>
        <form onSubmit={handleSubmit(handleLogin)}>
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
              type="text"
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
              Đăng Nhập
            </button>
            <NavLink className={styles.link} to="/user/register">
              Đăng Ký Nếu Chưa Có Tài Khoản
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
