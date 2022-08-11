import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../Context/DataProvider";

const Products = ({ filterProduct }) => {
  const history = useNavigate();

  let da = [];

  function createDescont(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }

  function createStars(number) {
    da = [];
    for (let i = 0; i < number; i++) {
      da.push(i);
    }
  }

  const { dataProduct, setDataProduct } = useContext(DataContext);

  const handleAddCard = (id) => {
    setDataProduct({ ...dataProduct, idPro: id });
    history("/Details");
  };
  return (
    <div id="container_list_product">
      {filterProduct.map((data) => (
        <div key={data.id} className="box_Product card border mx-2 my-3 ">
          <div id="image_product" className="p-2">
            <figure>
              <img
                src={data.image[0]}
                className="card-img-top img_box_product"
              />
            </figure>

            <h6
              className={
                "position-absolute start-0 top-0  badge  p-3 bg-danger"
              }
            >
              {data.discount === 0 ? "" : data.discount + "% DCTO"}
            </h6>
          </div>

          <div className="card-body  ">
            <h6 className="card-title mt-0 text-capitalize ">
              {String(data.name).toLowerCase()}
            </h6>

            <h6 className="text-uppercase text-secondary ">
              {data.brand}
              {/* {setArrrayBrand([...arrayBrand,data.brand])} */}
            </h6>

            <div className="stars">
              {createStars(data.stars)}
              {da.map((data, index) => (
                <i key={index} className="bi bi-star-fill text-danger "></i>
              ))}
            </div>

            <div className="d-flex">
              <h6 className="text-danger fw-bold">
                {data.discount === 0
                  ? "S/" + data.price_off
                  : "S/" + createDescont(data.price_off, data.discount)}
              </h6>

              <h6 className="mx-3">
                <del className="text-secondary fw-bold">
                  {data.discount === 0 ? "" : "$" + data.price_off}
                </del>
              </h6>
            </div>

            <div className="d-flex justify-content-center row">
              <button
                id="btn_buy_now"
                className="btn  btn_add_car col-10"
                onClick={() => handleAddCard(data.id)}
              >
                Add to car
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Products;
