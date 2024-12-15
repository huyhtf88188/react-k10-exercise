import { Navigate, Outlet } from "react-router-dom";

const Dasbroad = () => {
  const admin = localStorage.getItem("role");

  return <>{admin === "admin" ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Dasbroad;
