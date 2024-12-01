import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import instance, { getAll, removeById } from "./axios";
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

const App = () => {
  const [products, setProducts] = useState([]);

  // const getAll = async function () {
  // 	try {
  // 		// Cach 1: Dung fetch
  // 		// const res = await fetch("http://localhost:3000/products");
  // 		// const data = await res.json();

  // 		// Cach 2: Dung axios
  // 		// const { data } = await axios.get("http://localhost:3000/products");

  // 		// Cach 3: Dung axios voi instance
  // 		const { data } = await instance.get(`/products`);
  // 		console.log(data);
  // 		setProducts(data);
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // };

  useEffect(() => {
    (async () => {
      const data = await getAll("/products");
      setProducts(data);
    })();
  }, []);

  const handleRemoveProduct = (id) => {
    //logic Delete

    confirm("Are you sure?") &&
      (async () => {
        // try {
        // 	const res = await fetch(`http://localhost:3000/products/${id}`, {
        // 		method: "DELETE",
        // 	});
        // 	if (res.ok) {
        // 		// Cách 1: filter và setProducts
        // 		const newProducts = products.filter((item) => item.id !== id);
        // 		setProducts(newProducts);
        // 		// Cách 2: gọi lại getAll
        // 		// getAll();
        // 	} else {
        // 		console.log("Error!");
        // 	}
        // } catch (error) {
        // 	console.log(error);
        // }

        const res = await removeById("/products", id);
        if (res.status === 200) {
          const newProducts = products.filter((item) => item.id !== id);
          setProducts(newProducts);
        } else {
          console.log("Error!");
        }
      })();
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
