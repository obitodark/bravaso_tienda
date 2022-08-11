import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
const Counter = () => {
  const { textNumber, increaseNumber, subtractNumber } =
    useContext(ShoppingCartContext);

  return (
    <div className="container_input_number">
      <span id="input_mim" onClick={subtractNumber}>
        -
      </span>
      <span id="input_number" ref={textNumber}>
        1
      </span>
      <span id="input_max" onClick={increaseNumber}>
        +
      </span>
    </div>
  );
};

export default Counter;
