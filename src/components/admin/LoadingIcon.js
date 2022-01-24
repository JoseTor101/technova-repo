import React, {Fragment} from "react";
import Loading from "../../images/loading.gif";

const LoadingGif= () => {
  return (
    <Fragment>
        <div className="icon_product_div">
          <img src={Loading} className="icon_product" alt="icon_product"></img>
        </div>
    </Fragment>
  );
};
export default LoadingGif;