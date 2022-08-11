import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import logo from "../../images/logo.png";
import StoreApi from "../../services";

import "./index.css";
const NavBar = () => {
  const [inputText, setInputText] = useState("");

  const { setArrayFilterProducts } = useContext(DataContext);

  const handleOnchageSearch = (e) => {
    setInputText(e.target.value);
  };
  const handleOnClickBtnSearch = async () => {
    const response = await StoreApi.getSearchProduct(inputText);
    setArrayFilterProducts(response);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top shadow">
      <div className="container">
        <img src={logo} width="45px" className=" m-0 p-0 " alt="logo" />
        <span className="text-uppercase fw-lighter ms-2">Bravaso</span>

        <div className="order-lg-2 nav-btns">
          <button type="button" className="btn position-relative">
            <i className="bi bi-person mx-2"></i>
            <a>Iniciar Sesion</a>
            {/* <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              5
            </span> */}
          </button>
          <button type="button" className="btn position-relative">
            <i className="bi bi-bag"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              2
            </span>
          </button>
          <button type="button" className="btn position-relative">
            <i className="bi bi-bell"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
              2
            </span>
          </button>
        </div>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse order-lg-1" id="navMenu">
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item px-2 py-2 d-flex ">
              <div className="input-group mb-3">
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
                    className="btn_search btn "
                    type="button"
                    onClick={handleOnClickBtnSearch}
                  >
                    <i className="bi bi-search"></i>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
