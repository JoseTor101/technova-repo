import React, {Fragment} from "react";
import Gadgets from "../icons/headphone.png";

const CategorySmarthphones = () => {
  return (
    <Fragment>
        <div className="icon_product_div">
          <img src={Gadgets} className="icon_product" alt="icon_product"></img>
        </div>
    </Fragment>
  );
};
export default CategorySmarthphones;
