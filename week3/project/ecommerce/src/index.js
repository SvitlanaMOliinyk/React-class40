import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProductId from "./ProductId";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FavoriteItemsProvider } from "./FavoriteItemsContext";
import FavoriteProducts from "./FavoriteProducts";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavoriteItemsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="favoritepath" element={<FavoriteProducts />} />
          <Route path=":id" element={<ProductId />} />
        </Routes>
      </Router>
    </FavoriteItemsProvider>
  </React.StrictMode>
);
