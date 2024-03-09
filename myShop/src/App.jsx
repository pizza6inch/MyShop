import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={Login} />
          <Route path="/signup" element={SignUp} />
          <Route path="/about" element={about} />
          <Route path="/cart" element={cart} />
          <Route path="/wishlist" element={wishlist} />
          <Route path="/account" element={account} />
          <Route path="/product" element={product} />
          <Route path="/products" element={products} />
          <Route path="/checkout" element={checkout} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
