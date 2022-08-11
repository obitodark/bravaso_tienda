import { useState, useEffect, useRef, useContext } from "react";
import StoreApi from "../../services";
import {
  ViewCardProducts,
  ViewListCategories,
  ViewFormFilter,
  ViewPagination,
} from "../../components";

import "./index.css";
import { DataContext } from "../../Context/DataProvider";

const ListProducts = () => {
  // const [arrayListProductd,setArrayListProductd]= useState([]);

  const [products, setProducts] = useState([]);
  const [filtropro, setFiltropro] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);

  const [arrayBrand, setArrrayBrand] = useState([]);

  const {
    arrayproducts,
    dataProduct,
    setArrayProducts,
    arrayFilterProducts,
    setArrayFilterProducts,
  } = useContext(DataContext);

  const getListProducts = async () => {
    const response = await StoreApi.listProducts();
    //  setArrayProducts(response)
    setProducts(response);
    setFilterProduct(response);
    setFiltropro(response);
    // console.log("contenxt", arrayproducts);
  };

  const getBrand = async (name, id) => {
    if (name.length > 0) {
      const data = await StoreApi.getBrand(name, id);

      setArrrayBrand(data);

      console.log(" array de brand", data);
    }
  };

  const refrescar = async (name, id) => {
    const response = await StoreApi.getFiltroProduct(name, id);

    setFiltropro(response);
    setArrayFilterProducts(response);
    console.log("filtro de categoria", arrayproducts);
  };

  const getProductForBrand = async (brand) => {
    const respose = await StoreApi.getProductForBrand(
      brand,
      dataProduct.idCategories,
      dataProduct.nameSubcategories
    );
    setArrayFilterProducts(respose);
  };

  const orderProducts = async (valueInputSelect) => {
    if (valueInputSelect.length > 0) {
      const response = await StoreApi.getOrderPrice(
        valueInputSelect,
        dataProduct.nameSubcategories,
        dataProduct.idCategories
      );

      setArrayFilterProducts(response);
    }
  };

  useEffect(() => {
    getListProducts();
  }, []);

  return (
    <div className="container mt-5 pt-5">
      <h1>hola mundo</h1>
      <div className="container border  border-top-0 border-start-0 border-end-0">
        <h2 className="fw-normal">Lista Productos</h2>
        <h6 className="fw-normal text-secondary">
          Inicio/Categorias/{dataProduct.nameCategories}/
          {dataProduct.nameSubcategories +
            "(" +
            arrayFilterProducts.length +
            ")"}
        </h6>

        <ViewFormFilter
          getProductForBrand={getProductForBrand}
          arrayBrand={arrayBrand}
          orderProducts={orderProducts}
        />
      </div>
      <div className="container d-flex my-2">
        <div className="div_list_categories">
          <h4 className="fw-normal my-3">Categorias</h4>
          <ViewListCategories refrescar={refrescar} getBrand={getBrand} />
        </div>

        <div className="div_list_product ">
          <ViewCardProducts
            filterProduct={arrayFilterProducts}
            arraybrand={arrayBrand}
          />
        </div>
      </div>
      {/* <div>{filtropro.length !== 0 ? <ViewPagination /> : ""}</div> */}
    </div>
  );
};
export default ListProducts;
