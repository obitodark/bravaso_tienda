import TabSpecification from "../TabSpecification";
import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";

const TabDetailsProduct = () => {
  const { arrayproducts, dataProduct } = useContext(DataContext);
  const [description, setDescription] = useState([]);

  // const description = [];
  // const getDescription = () => {
  //   const desc = arrayproducts.find(
  //     (arrayproduct) => arrayproduct.id === dataProduct.idPro
  //   );

  //   // setDescription(desc);
  //   console.log("descripyion", description);
  // };

  // getDescription();
  return (
    <div>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active "
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Descripcion
          </button>
          <button
            className="nav-link color_primary_text"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Especificaion
          </button>
          <button
            className="nav-link color_primary_text"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            type="button"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Comentarios
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active pt-5"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          {/* {description.description} */}
        </div>
        <div
          className="tab-pane fade pt-5"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <TabSpecification />
        </div>
        <div
          className="tab-pane fade pt-5"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          ...
        </div>
      </div>
    </div>
  );
};
export default TabDetailsProduct;
