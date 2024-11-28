import { Outlet } from "react-router-dom";

const DashBroadPage = () => {
  return (
    <div>
      <h1> Đây là trang của admin</h1>
      <Outlet />
    </div>
  );
};

export default DashBroadPage;
