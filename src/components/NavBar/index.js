import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import logo from "../../images/logo.png";
import StoreApi from "../../services";
import { useNavigate } from "react-router-dom";
import { ShoppingCartContext } from "../../Context";
import "./index.css";
const NavBar = () => {
  const [inputText, setInputText] = useState("");
  const { quantityProductCart } = useContext(ShoppingCartContext);
  const { setArrayFilterProducts } = useContext(DataContext);
  const history = useNavigate();

  const handleNavigateHome = () => {
    history("/");
  };
  const handleNavigateCartBuy = () => {
    history("/shoppingcart");
  };

  const handleOnchageSearch = (e) => {
    setInputText(e.target.value);
  };
  const handleOnClickBtnSearch = async () => {
    const response = await StoreApi.getSearchProduct(inputText);
    setArrayFilterProducts(response);
  };
  return (
    <nav className=" navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top shadow">
      <div className="container  ">
        <div>
          <img
            src={logo}
            width="40px"
            className="img_logo"
            alt="logo"
            onClick={handleNavigateHome}
          />
          <span className="text-uppercase fw-lighter ms-2">Bravaso</span>
        </div>

        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn_icon  position-relative">
            <i className="bi bi-person"></i>
          </button>
          <button
            type="button "
            className=" btn_icon  position-relative"
            onClick={handleNavigateCartBuy}
          >
            <i className="bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              {quantityProductCart}
            </span>
          </button>
          <button type="button" className="btn_icon  position-relative">
            <i className="bi bi-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              2
            </span>
          </button>
        </div>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <input
              type="text"
              className="form-control input_search"
              placeholder="Search..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={handleOnchageSearch}
            />
            <div className="input-group-append">
              <button
                className="btn_search  "
                type="button"
                onClick={handleOnClickBtnSearch}
              >
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};
export default NavBar;
