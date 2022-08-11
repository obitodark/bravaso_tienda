import { useState, useRef, useContext } from "react";
import { DataContext } from "../../Context/DataProvider";

// import BoxProducts from "../BoxProducts";
import "./index.css";
const ListSubcategories = ({
  subcategories,
  idcategories,
  renderFilterSubcategories,
  name,
  namecate,
}) => {
  const btnSub = useRef(null);

  // const { nameSubcategories, arraySubcategories } = useContext(DataContext);
  // function gaaaa() {
  //   // const ga = arraySubcategories[idcategories].filter((data) => {
  //   //   return data;
  //   // });
  //   // setNaneSub(ga);
  //   // console.log(subcategories);
  // }

  // getArraySubcategories(idcategories);
  // console.log(arraySubcategories);
  return (
    <li
      title={namecate}
      id={idcategories}
      // ref={btnSub}
      onClick={renderFilterSubcategories}
      className="list list-group-item  subcategories"
    >
      {name}
    </li>
  );
};

export default ListSubcategories;

// return arraySubcategories.map((data, index) => (
//     <li
//       key={index}
//       title={name}
//       id={Number(idcategories) + 1}
//       ref={btnSub}
//       onClick={renderFilterSubcategories}
//       className="list list-group-item  subcategories"
//     >
//       {data}
//     </li>
//   ));
// };
