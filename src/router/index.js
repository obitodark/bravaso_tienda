import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ViewListProduct,
  ViewDetailsProduct,
  ViewShoppingCart,
} from "../pages";
import NavBar from "../components/NavBar";
import MyLayout from "../MylLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route path="/home" element={<ViewListProduct />} />
          <Route path="/Details" element={<ViewDetailsProduct />} />
          <Route path="/shoppingcart" element={<ViewShoppingCart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
