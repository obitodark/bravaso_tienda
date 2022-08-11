import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";
import CartItens from "../../components/CartItens";
import { DataContext } from "../../Context/DataProvider";
const Shoppingcart = () => {
  const { arrayShoppingCarts, setArrayShoppingCarts } =
    useContext(ShoppingCartContext);
  const { dataProduct } = useContext(DataContext);

  return (
    <div className="container mt-5 py-5">
      <h2 className="fw-normal">Carrito de Compras</h2>
      <h6 className="fw-normal text-secondary">Inicio/Carrito de Compras</h6>
      <div className="addCars">
        <div className="addCar_product p-3  ">
          {arrayShoppingCarts.length > 0 &&
            arrayShoppingCarts.map((arrayShopping, index) => (
              <CartItens
                key={index}
                arrayShopping={arrayShopping}
                id={dataProduct.idPro}
              />
            ))}
        </div>
        <div
          className="addCar_total card border-0  my-4"
          //   style="width: 18rem;"
        ></div>
      </div>
    </div>
  );
};

export default Shoppingcart;
