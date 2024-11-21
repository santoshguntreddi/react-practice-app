import { Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/products";
import HomePage from "./pages/home";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/users" element={<h1>Users Component</h1>} />
      <Route path="/weather" element={<h1>Weather Component</h1>} />
      <Route path="*" element={<h1>Not found </h1>} />
    </Routes>
  );
}
