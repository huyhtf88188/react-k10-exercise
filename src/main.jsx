import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store.js";
import Header from "./page/header/Header.jsx";
import Footer from "./page/footer/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Provider store={store}>
        <App />
      </Provider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
