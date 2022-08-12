import { DataContext } from "../../Context/DataProvider";
import DetailsImagesBig from "../DetailsImageBig";
import DetailsImageSmall from "../DetailsImageSmall";

import { useContext, useState, useEffect } from "react";
import StoreApi from "../../services";

const DetailsProductImages = () => {
  const [Productos, setProductos] = useState([]);

  const { arrayProduct, dataProduct } = useContext(DataContext);

  const getListProducts = async () => {
    const response = await StoreApi.listProducts();
    const producto = response.filter(
      (data) => Number(data.id) === Number(dataProduct.idPro)
    );
    const images = producto.map((image) => image.image);
    setProductos(images[0]);
    console.log(images);
  };

  //     const getDetailProducto=()=>{
  // const producto=Productos.find(data=>(data.id===1))
  //         setGa(producto)
  //     }

  useEffect(() => {
    getListProducts();
    console.log("image de  productos");
  }, []);
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide row"
      data-bs-ride="carousel"
    >
      <div>
        <div id="da" className="carousel-indicators">
          {Productos.map((producto, index) => (
            <DetailsImageSmall key={index} index={index} producto={producto} />
          ))}

          {/* ${imageSmall(detailProduct)} */}
        </div>
      </div>

      <div className="carousel-inner">
        {Productos.map((producto, index) => (
          <DetailsImagesBig key={index} index={index} producto={producto} />
        ))}
      </div>
    </div>
  );
};
export default DetailsProductImages;
