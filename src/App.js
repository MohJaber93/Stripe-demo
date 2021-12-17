import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "components/Products";
import Checkout from "components/Checkout";
import { products } from "constants/products";
import "./App.css";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Products products={products} selectProduct={setSelectedProduct} />
          }
        />
        <Route
          path="/checkout"
          element={<Checkout selectedProduct={selectedProduct} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
