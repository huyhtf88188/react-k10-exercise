import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
