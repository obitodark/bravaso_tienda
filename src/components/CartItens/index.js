import { useContext, useRef } from "react";
import Counter from "../Counter";
import { ShoppingCartContext } from "../../Context";
const CartItens = ({ arrayShopping }) => {
  const { arrayShoppingCarts, setArrayShoppingCarts } =
    useContext(ShoppingCartContext);
  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  function handelonClickMax(e) {
    console.log("Evento de spam", e.target.className);
  }
  const textNumberCart = useRef();
  const getIdProductIndex = (id) => {
    return arrayShoppingCarts.findIndex(
      (arrayShoppingCart) => arrayShoppingCart.CartShopping.id === Number(id)
    );
  };
  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  const updateAmountProduct = () => {};
  const increaseNumber = (e) => {
    textNumberCart.current.innerText =
      Number(textNumberCart.current.innerText) + 1;
    const id = e.target.className.replace("numbermax", "");
    console.log("posicion", getIdProductIndex(id));
    console.log("Evento de spam", e.target.className);
    console.log("id de pro", id);
    arrayShoppingCarts[getIdProductIndex(id)].quantity =
      textNumberCart.current.innerText;
    // arrayShoppingCarts.splice(items, 1);
    // setArrayShoppingCarts([
    //   ...arrayShoppingCarts,
    //   {
    //     ...arrayShoppingCarts[getIdProductIndex(id)],
    //     quantity: textNumberCart.current.innerText,
    //   },
    // ]);
    // const newarrayShoppingCarts = arrayShoppingCarts.filter(onlyUnique);
    // setArrayShoppingCarts(newarrayShoppingCarts);
  };

  const subtractNumber = () => {
    textNumberCart.current.innerText =
      textNumberCart.current.innerText === "1"
        ? (textNumberCart.current.innerText = "1")
        : Number(textNumberCart.current.innerText) - 1;
  };
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
          <span
            id="input_mim"
            className={arrayShopping.CartShopping.id + "numbermin"}
            onClick={subtractNumber}
          >
            -
          </span>
          <span className="${" id="input_number" ref={textNumberCart}>
            {arrayShopping.quantity}
          </span>
          <span
            id={"input_max"}
            className={arrayShopping.CartShopping.id + "numbermax"}
            onClick={increaseNumber}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};
export default CartItens;
