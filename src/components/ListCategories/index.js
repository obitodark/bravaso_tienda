import { useContext, useState } from "react";
import { DataContext } from "../../Context/DataProvider";
import ListSubcategories from "../ListSubcategories";
import "./index.css";

const ListCategories = ({ refrescar, getBrand }) => {
  const { arraySubcategories, arrayCategories, dataProduct, setDataProduct } =
    useContext(DataContext);

  const renderFilterSubcategories = (e) => {
    //  cambiarUser("nameSubcategories",e.target.innerText)

    //  const datas= filterProduct.filter(data=>(data.nameSubSubcategories===e.target.innerText))
    refrescar(e.target.innerText, e.target.id);
    getBrand(e.target.innerText, e.target.id);

    //  console.log(e.target.id,e.target.innerText)

    setDataProduct({
      ...dataProduct,
      nameSubcategories: e.target.innerText,
      nameCategories: e.target.title,
      idCategories: e.target.id,
    });

    console.log("id de producto", arraySubcategories);
    console.log("id de sbcategories", e.target.title);
  };

  // const arrayImages = [
  //   "https://cdn.icon-icons.com/icons2/2070/PNG/512/polo_icon_126277.png",
  //   "https://cdn.icon-icons.com/icons2/1085/PNG/512/womans-dress_78202.png",
  //   "https://cdn.icon-icons.com/icons2/1525/PNG/512/976599-all-in-one-appliances-desktop-display-electronics-pc-screen_106534.png",
  //   "https://cdn.icon-icons.com/icons2/2050/PNG/512/television_icon_124404.png",
  //   "https://cdn.icon-icons.com/icons2/1525/PNG/512/976634-appliances-cooking-kitchen-microwave-oven_106555.png",
  //   "https://cdn.icon-icons.com/icons2/1239/PNG/512/armchair_83943.png",
  // ];

  return (
    <div>
      {arrayCategories.map((data, index) => (
        <div
          key={index}
          className=" list_categories accordion"
          id="accordionExample"
        >
          <div className="accordion-item ">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="btn_categories accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#categories${String(data.id)}`}
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                {data.name}
              </button>
            </h2>

            <div
              id={`categories${String(data.id)}`}
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-categoria">
                <ul
                  id={`sub${String(data.id)}`}
                  className="list-group list-group-flush container-fluid "
                >
                  {arraySubcategories.length > 0 &&
                    arraySubcategories[index].map((dat, index) => (
                      <ListSubcategories
                        key={index}
                        name={dat}
                        namecate={data.name}
                        idcategories={data.id}
                        renderFilterSubcategories={renderFilterSubcategories}
                      />
                    ))}

                  {/* {createSubCategories(dat.id-1)} */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ListCategories;
