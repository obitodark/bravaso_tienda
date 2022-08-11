import { createContext, useState, useEffect } from "react";
import StoreApi from "../services";
export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [dataProduct, setDataProduct] = useState({
    idPro: 1,
    idCategories: 0,
    idSubcategories: 0,
    nameSubcategories: "",
    nameCategories: "",
  });

  const [arrayproducts, setArrayProducts] = useState([]);
  const [arrayFilterProducts, setArrayFilterProducts] = useState([]);
  const [arraySubcategories, setArraySubcategories] = useState([]);
  const [arrayCategories, setArrayCategories] = useState([]);
  const [descount, setDescunt] = useState(null);
  const getListProductss = async () => {
    const response = await StoreApi.listProducts();
    setArrayProducts(response);
    setArrayFilterProducts(response);
  };

  const getListSubcategoriess = async () => {
    const data = await StoreApi.ListSubcategories();
    setArraySubcategories(data);
  };

  const getListCategories = async () => {
    const response = await StoreApi.ListCategories();
    setArrayCategories(response);
  };

  useEffect(() => {
    getListProductss();
  }, []);

  useEffect(() => {
    getListSubcategoriess();
  }, []);

  useEffect(() => {
    getListCategories();
  }, []);

  function createDescont(price, discount) {
    setDescunt((price - price * (discount / 100)).toFixed(2));
  }

  return (
    <DataContext.Provider
      value={{
        dataProduct,
        setDataProduct,

        arrayproducts,
        setArrayProducts,
        arrayFilterProducts,
        setArrayFilterProducts,
        arraySubcategories,
        createDescont,
        arrayCategories,
        descount,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
