import DetailsProductImages from "../../components/DetailsProductImages";
import ModalDetails from "../../components/ModalDetails";
import { ViewTabDetailsProduct } from "../../components";
import { DataContext } from "../../Context/DataProvider";
import { useContext } from "react";
import DetailsProductData from "../../components/DetailsProductData";

import "./index.css";

const DetailsProduct = () => {
  const { dataProduct } = useContext(DataContext);

  return (
    <div className="container mt-5 pt-5">
      <ModalDetails />
      <div id="container_details_product">
        <h2 className="fw-normal">Detalle de Producto</h2>
        <h6 className="fw-normal text-secondary">
          Inicio/Categoria/{dataProduct.nameCategories}/
          {dataProduct.nameSubcategories}
        </h6>
        <div>
          <div id="container_images_datos">
            <div className="container_images">
              <DetailsProductImages />
            </div>

            <div className="container_datos">
              <div id="container_detalle_precio">
                <DetailsProductData />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ViewTabDetailsProduct />
    </div>
  );
};
export default DetailsProduct;
