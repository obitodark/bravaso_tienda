import { useContext } from "react";
import "./index.css";
import { DataContext } from "../../Context/DataProvider";
const FormFilter = ({ arrayBrand, orderProducts, getProductForBrand }) => {
  const { boxListCategories } = useContext(DataContext);
  function handleSelectChangeBrand(e) {
    getProductForBrand(e.target.value);
    console.log("filtro de marca", e.target.value);
  }

  let estado = false;
  function handleToggleViewCategories() {
    if (!estado) {
      boxListCategories.current.className =
        "show_div_option div_list_categories";
      boxListCategories.current.className =
        "show_div_option div_list_categories";
      estado = true;
    } else {
      boxListCategories.current.className = "div_list_categories";
      boxListCategories.current.className = "div_list_categories";
      estado = false;
    }

    console.log(boxListCategories.current.className);
  }
  function handleSelectChange(e) {
    orderProducts(e.target.value);
  }
  return (
    <div id="div_filtros" className="d-flex my-4 justify-content-end">
      {/* {  bramdDeleteDuplicat()} */}
      <select
        name=""
        onChange={handleSelectChangeBrand}
        id="input_select_brand"
        className="form-select form_select mx-2"
      >
        <option value="Marca-All">Marca-All</option>
        {arrayBrand.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
      </select>

      <select
        name=""
        onChange={handleSelectChange}
        className="form-select form_select mx-2"
      >
        <option value="ordenar">Ordenar por</option>
        <option value="destacado">Destacados</option>
        <option value="menor">Menor a mayor</option>
        <option value="mayor">Mayor a menor</option>
      </select>

      <button
        id="btn_filter_option"
        className="btn btn-primary"
        onClick={handleToggleViewCategories}
      >
        <i class="bi bi-filter"></i>
      </button>
    </div>
  );
};
export default FormFilter;
