import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ViewListProduct,
  ViewDetailsProduct,
  ViewShoppingCart,
  ViewLogin
} from "../pages";

import MyLayout from "../MylLayout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyLayout />}>
          <Route path="/" element={<ViewListProduct />} />
          <Route path="/Details" element={<ViewDetailsProduct />} />
          <Route path="/shoppingcart" element={<ViewShoppingCart />} />
          <Route path="/login" element={<ViewLogin/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
