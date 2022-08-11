import ProductNotFound from "../ProductNotFound";
import Products from "../Products";

import "./index.css";

const CardProducts = ({ filterProduct }) => {
  return (
    <div>
      {filterProduct.length === 0 ? (
        <ProductNotFound />
      ) : (
        <Products filterProduct={filterProduct} />
      )}
    </div>
  );
};

export default CardProducts;
