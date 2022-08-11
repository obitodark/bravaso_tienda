import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const CartPriceTotal = () => {
  const { arrayShoppingCarts, setQuantityProductCart } =
    useContext(ShoppingCartContext);
  let numTotal = 0;
  let priceTotal = 0;
  let priceSinDisconut = 0;
  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }
  function gettotal() {
    arrayShoppingCarts.map((data) => {
      numTotal = data.quantity + numTotal;
      priceTotal =
        priceTotal +
        (data.CartShopping.discount === 0
          ? data.CartShopping.price_off * data.quantity
          : createDescont(
              data.CartShopping.price_off,
              data.CartShopping.discount
            ) * data.quantity);

      priceSinDisconut =
        priceSinDisconut + data.CartShopping.price_off * data.quantity;
    });
    setQuantityProductCart(numTotal);
  }
  gettotal();
  return (
    <div className="card-body">
      <h4 className="card-title text-dark my-4">Resumen de Orden</h4>
      <div className="d-flex justify-content-between my-2 px-1">
        <h6>Productos({numTotal}):</h6>
        <h6>{priceSinDisconut.toFixed(2)}</h6>
      </div>
      <div className="d-flex justify-content-between my-2 px-1">
        <h6>Descuentos :</h6>
        <h6>{(priceSinDisconut - priceTotal).toFixed(2)}</h6>
      </div>
      <div className="d-flex justify-content-between my-2 px-1">
        <h6>Total :</h6>
        <h6>{priceTotal.toFixed(2)}</h6>
      </div>

      <div className="d-flex justify-content-center row my-5">
        <a href="#" className="btn btn_buy_now  col-10">
          {" "}
          Comprar
        </a>
      </div>
    </div>
  );
};
export default CartPriceTotal;
