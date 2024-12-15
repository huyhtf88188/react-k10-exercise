import { Route, Routes } from "react-router-dom";
import ProductsForm from "./page/ProductsForm";
import ProductsTable from "./page/ProductsTable";

import Register from "./auth/register";
import { ToastContainer } from "react-toastify";
import Login from "./auth/Login";
import HomePage from "./page/HomePage";
import AdminPage from "./page/AdminPage";
import Dasbroad from "./page/DasBroad";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Dasbroad />}>
          <Route index element={<AdminPage />} />
          <Route path="products" element={<ProductsTable />} />
          <Route path="products/add" element={<ProductsForm />} />
          <Route path="products/update/:id" element={<ProductsForm />} />
        </Route>
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
