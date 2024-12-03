import { Outlet } from "react-router-dom";

const User = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Trang Đăng Ký - Đăng Nhập</h1>
      <Outlet />
    </div>
  );
};

export default User;
