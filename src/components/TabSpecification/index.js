import { useContext, useState, useEffect } from "react";
import { DataContext } from "../../Context/DataProvider";
import StoreApi from "../../services";

const TabSpecification = () => {
  const [Productos, setProductos] = useState([]);

  const { dataProduct } = useContext(DataContext);

  const getListProducts = async () => {
    const response = await StoreApi.listProducts();
    const producto = response.filter(
      (data) => Number(data.id) === Number(dataProduct.idPro)
    );

    setProductos(producto[0]);
  };
  useEffect(() => {
    getListProducts();
    console.log("image de  productos");
  }, []);
  return (
    <table className="table table-striped">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        <tr>
          <th className="text-secondary" scope="row">
            Marca :
          </th>
          <td>${Productos.brand}</td>
        </tr>
        <tr>
          <th scope="row">Modelo</th>
          <td>${Productos.model}</td>
        </tr>
        <tr>
          <th scope="row">Nombre</th>
          <td colSpan={2}>${Productos.name}</td>
        </tr>

        <tr>
          <th scope="row">Peso :</th>
          <td colSpan={2}>${Productos.weight}</td>
        </tr>
        <tr>
          <th scope="row">Material :</th>
          <td colSpan={2}>${Productos.material}</td>
        </tr>
        <tr>
          <th scope="row">Color</th>
          <td colSpan={2}>${Productos.color}</td>
        </tr>
        <tr>
          <th scope="row">Origen</th>
          <td colSpan={2}>${Productos.source}</td>
        </tr>
      </tbody>
    </table>
  );
};
export default TabSpecification;
