import React, {Fragment} from "react";
import Smartphones from "../icons/llamada-de-telefono-inteligente.png";

const CategorySmartphones = () => {
  return (
    <Fragment>
        <div className="icon_product_div">
          <img
            src={Smartphones}
            className="icon_product"
            alt="icon_product"
          />
        </div>
    </Fragment>
  );
};
export default CategorySmartphones;
