import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListScreen from "./views/product/list";
import CartScreen from "./views/cart";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductListScreen/>} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
