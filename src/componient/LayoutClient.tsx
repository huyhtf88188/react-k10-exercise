import { Outlet } from "react-router-dom";
import Header from "./layout/header/Header";

const LayoutClient = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default LayoutClient;
