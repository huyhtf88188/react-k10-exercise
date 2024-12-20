import { useRoutes } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFounPage from "../pages/NotFounPage";
import RegisterPage from "../pages/RegisterPage";
import LayoutAdmin from "../componient/LayoutAdmin";
import ProductsPage from "../pages/admin/ProductsPage";
import ProductsForm from "../pages/admin/ProductsForm";
import ProductsClient from "../pages/ProductsClient";
import LayoutClient from "../componient/LayoutClient";

const AppRoutest = () => {
  const routes = [
    {
      path: "/",
      element: <LayoutClient />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "/productsclient", element: <ProductsClient /> },
        { path: "/about", element: <AboutPage /> },
      ],
    },

    { path: "/register", element: <RegisterPage /> },
    { path: "/login", element: <LoginPage /> },
    {
      path: "/admin",
      element: <LayoutAdmin />,
      children: [
        { path: "products", element: <ProductsPage /> },
        { path: "products/add", element: <ProductsForm /> },
        { path: "products/update/:id", element: <ProductsForm /> },
      ],
    },
    { path: "*", element: <NotFounPage /> },
  ];
  return useRoutes(routes);
};

export default AppRoutest;
