import { DataContext } from "../../Context/DataProvider";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StoreApi from "../../services";
import { ShoppingCartContext } from "../../Context";
const ModalDetails = () => {
  const { dataProduct } = useContext(DataContext);
  const { arrayShoppingCarts } = useContext(ShoppingCartContext);

  const [Productos, setProductos] = useState([]);
  const [image, setImage] = useState([]);
  const history = useNavigate();
  const getListProducts = async () => {
    const response = await StoreApi.listProducts();
    const producto = response.filter(
      (data) => Number(data.id) === Number(dataProduct.idPro)
    );

    setProductos(producto[0]);
    setImage(producto[0].image);
  };

  //   let dataProduct = [];

  //   const getdata = () => {
  //     dataProduct = arrayproducts.filter(
  //       (arrayproduct) => arrayproduct.id === idProduct
  //     );
  //   };
  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  const handleOnClickTagBuy = () => {
    history("/shoppingcart");
    console.log("cartshopping", arrayShoppingCarts);
  };

  useEffect(() => {
    getListProducts();
    // console.log("image de  productos", Productos.image[0]);
  }, []);

  return (
    <div
      className="modal fade "
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      //   tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered  modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Se ha agregado a la bolsa de compras
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body d-flex">
            <div>
              <img width="150px" src={image[0]} />
            </div>

            <div className="px-3">
              <h6 className="fw-light text-uppercase">{Productos.brand}</h6>
              <h5 className="fw-normal">{Productos.name}</h5>
              <h6>talla:42</h6>
              <h6>cantidad :2</h6>
              <h5 className="fw-normal">
                ${"S/" + createDescont(Productos.price_off, Productos.discount)}
                <del className="text-secondary mx-3">
                  ${Productos.discount === 0 ? "" : "S/" + Productos.price_off}
                </del>
              </h5>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn_add_car"
              data-bs-dismiss="modal"
            >
              Seguir comprando
            </button>
            <button
              type="button"
              className="btn btn_buy_now"
              onClick={handleOnClickTagBuy}
              data-bs-dismiss="modal"
            >
              Ver bolsa de compras
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalDetails;
