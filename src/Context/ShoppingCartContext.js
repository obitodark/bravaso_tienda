import { createContext, useState, useRef, useContext } from "react";
import { DataContext } from "./DataProvider";

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [arrayShoppingCarts, setArrayShoppingCarts] = useState([
    // JSON.parse(localStorage.getItem("shoppingcart")) && return ,
  ]);
  const [quantityProduct, setQuantityProduct] = useState(1);
  const textNumber = useRef();

  const textNumbercart = useRef();
  const { dataProduct } = useContext(DataContext);
  // if (window.performance.navigation.type === 1) {
  //   setArrayShoppingCarts(JSON.parse(localStorage.getItem("shoppingcart")));
  // }
  const getItemsCart = () => {
    return arrayShoppingCarts.findIndex(
      (arrayShoppingCart) =>
        arrayShoppingCart.CartShopping.id === dataProduct.idPro
    );
  };


  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  const saveInCart = (CartShopping, user_id) => {
    const objeto = {
      CartShopping,
      user_id,
      quantity: Number(textNumber.current.innerText),
    };
    const items = getItemsCart();
    if (items === -1) {
      textNumber.current.innerText = Number(textNumber.current.innerText);
      setQuantityProduct(textNumber.current.innerText);
      arrayShoppingCarts[arrayShoppingCarts.length] = objeto;
      setArrayShoppingCarts([...arrayShoppingCarts]);
      console.log("cantidad", textNumber.current.innerText);
    } else {
      textNumber.current.innerText = Number(textNumber.current.innerText);
      const total =
        Number(arrayShoppingCarts[items].quantity) +
        Number(textNumber.current.innerText);
      console.log("cantidad", textNumber.current.innerText);
      arrayShoppingCarts[items].quantity = total;
      // arrayShoppingCarts.splice(items, 1);
      setArrayShoppingCarts([
        ...arrayShoppingCarts,
        { ...arrayShoppingCarts[items], quantity: total },
      ]);
      const newarrayShoppingCarts = arrayShoppingCarts.filter(onlyUnique);
      setArrayShoppingCarts(newarrayShoppingCarts);
      // setArrayShoppingCarts([...arrayShoppingCarts, data]);
    }

    saveInLocalStorage(arrayShoppingCarts);
  };

  const increaseNumber = () => {
    textNumber.current.innerText = Number(textNumber.current.innerText) + 1;
    setQuantityProduct(textNumber.current.innerText);
  };

  const subtractNumber = () => {
    textNumber.current.innerText =
      textNumber.current.innerText === "1"
        ? (textNumber.current.innerText = "1")
        : Number(textNumber.current.innerText) - 1;
    setQuantityProduct(textNumber.current.innerText);
  };

  const saveInLocalStorage = (cart) => {
    localStorage.setItem("shoppingcart", JSON.stringify(cart));
  };
  return (
    <ShoppingCartContext.Provider
      value={{
        saveInCart,
        arrayShoppingCarts,
        textNumber,
        subtractNumber,
        increaseNumber,
        quantityProduct,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
