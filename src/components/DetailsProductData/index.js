import { useState, useContext } from "react";
import { DataContext } from "../../Context/DataProvider";
import Counter from "../Counter";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
const DetailsProductData = () => {
  const { dataProduct, arrayproducts } = useContext(DataContext);
  const { saveInCart } = useContext(ShoppingCartContext);

  const { textNumber, increaseNumber, subtractNumber } =
    useContext(ShoppingCartContext);

  const [Productos, setProductos] = useState(
    arrayproducts.find((arrayproduct) => arrayproduct.id === dataProduct.idPro)
  );

  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  const history = useNavigate();
  const handleAddCart = () => {
    saveInCart(Productos);
    console.log("gagaagaga", Productos);
  };
  const handleOncClickBack = () => {
    history("/home");
  };

  return (
    <div>
      <div className="d-flex my-1">
        <h5 className="text-secondary mx-1 text-uppercase">
          {Productos.brand}
        </h5>
      </div>

      <div className="py-2">
        <h2 className="text-capitalize">{String(Productos.name)}</h2>
        {/* ${createStars(detailProduct.stars)} */}
      </div>

      <h6
        className={`badge  bg-danger
        ${Productos.discount === "" ? "p-0" : "py-3 px-2 "}`}
      >
        {Productos.discount === 0 ? "" : Productos.discount + "% DCTO"}
      </h6>

      <div className="row d-flex">
        <h5>
          Stock :<span className="text-secondary mx-1">{Productos.stock}</span>
        </h5>

        <h6 className="text-secondary">Cantidad :</h6>

        <Counter textNumber={textNumber} increaseNumber={increaseNumber} subtractNumber={increaseNumber} />

        <div></div>
        <div className="mt-3">
          <h5>Tallas</h5>
          <div>//</div>
        </div>

        <div>
          <h4 className="text-danger">
            {"S/" + createDescont(Productos.price_off, Productos.discount)}
            (Oferta)
            <del className="text-secondary mx-3">
              {Productos.discount === 0 ? "" : "S/" + Productos.price_off}
            </del>
          </h4>
        </div>

        <div className="row d-flex justify-content-around mt-4">
          <input
            className=" btn btn_add_car col-5"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            type="button"
            value="Add car"
            onClick={handleAddCart}
          />
          <input
            className="btn btn_buy_now col-5"
            type="button"
            value="Buy now"
            onClick={handleOncClickBack}
          />
        </div>
      </div>
    </div>
  );
};
export default DetailsProductData;
