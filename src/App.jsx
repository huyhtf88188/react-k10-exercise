import Header from "./components/header/Header";
import Shop from "./assets/page/Shop";
import { Route, Routes } from "react-router-dom";
import HomePage from "./assets/page/HomePage";
import NotFoundPage from "./assets/page/NotFoundPage";
import ServicesPage from "./assets/page/ServicesPage";
import ContactPage from "./assets/page/ContactPage";
import "../src/App.css";
import Footer from "./components/footer/Footer";
import ProductDetailPage from "./assets/page/ProductDetailPage";
import DashBroadPage from "./assets/page/admin/DashBroadPage";
import ProductsList from "./assets/page/admin/ProductsList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />

        <Route path="/admin" element={<DashBroadPage />}>
          <Route path="/admin/products" element={<ProductsList />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
