import React, { Fragment } from "react";
import television from "../icons/television.png";

const CategoryTvs = () => {
  return (
    <Fragment>
        <div className="icon_product_div" >
          <img
            src={television}
            className="icon_product"
            alt="icon_product"
          ></img>
        </div>
    </Fragment>
  );
};
export default CategoryTvs;
