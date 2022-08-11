import { useContext } from "react";

const CartItens = ({ arrayShopping }) => {
  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  function handelonClickMax(e) {
    console.log("Evento de spam", e.target.className);
  }

  return (
    <div
      id=""
      className="carBuyData my-3 p-2 w-100 d-flex justify-content-between"
    >
      <div className="d-flex   ">
        <div className="">
          <img
            width="150px"
            height="150px"
            src={arrayShopping.CartShopping.image[0]}
            alt=""
          />
        </div>
        <div className="mx-3 d-flex flex-column justify-content-center">
          <h5 className="text-secondary fw-light">
            {arrayShopping.CartShopping.brand}
          </h5>
          <h5 className="fw-normal">{arrayShopping.CartShopping.name}</h5>
          <h6 className="text-secondary">
            Talla :{arrayShopping.CartShopping.size}
          </h6>
          <h5 className="fw-normal">
            {" "}
            {arrayShopping.CartShopping.discount === 0
              ? "S/" + arrayShopping.CartShopping.price_off
              : "S/" +
                createDescont(
                  arrayShopping.CartShopping.price_off,
                  arrayShopping.CartShopping.discount
                )}
            <del className="text-secondary mx-2">
              {arrayShopping.CartShopping.discount === 0
                ? ""
                : "$" + arrayShopping.CartShopping.price_off}
            </del>
          </h5>
        </div>
      </div>

      <div className="  d-flex flex-column justify-content-around align-items-end">
        <div className="d-flex">
          <a>Guardar para despues</a>
          <button className="btn border-0">
            <i className="bi bi-trash mx-2"></i>
          </button>
        </div>
        <div className="container_input_number">
          <span id="input_mim">-</span>
          <span className="${" id="input_number">
            {arrayShopping.quantity}
          </span>
          <span
            id={"input_max"}
            className={arrayShopping.CartShopping.id + "number"}
            onClick={handelonClickMax}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItens;
