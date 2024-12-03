import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAll, removeById } from "./axios";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductDetail from "./pages/ProductDetail";
import ServicesPage from "./pages/ServicesPage";
import Dashboard from "./pages/admin/Dashboard";
import ProductForm from "./pages/admin/ProductForm";
import ProductTable from "./pages/admin/ProductTable";
import RegisterForm from "./pages/user/RegisterForm";
import LoginForm from "./pages/user/LoginForm";
import User from "./pages/user/User";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [products, setProducts] = useState([]);

  // const location = useLocation();
  // console.log("location: ", location);
  useEffect(() => {
    (async () => {
      const data = await getAll("/products");
      setProducts(data);
    })();
  }, []);

  const handleRemoveProduct = async (id) => {
    if (confirm("Are you sure?")) {
      const res = await removeById("/products", id);
      if (res.status === 200) {
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
      } else {
        console.log("Error!");
      }
    }
  };
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/categories" element={<CategoryPage />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/admin" element={<Dashboard />}>
          <Route
            path="products"
            element={
              <ProductTable
                products={products}
                onRemove={handleRemoveProduct}
              />
            }
          />
          <Route path="products/add" element={<ProductForm />} />
          <Route path="products/update/:id" element={<ProductForm />} />
        </Route>

        <Route path="/user" element={<User />}>
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
