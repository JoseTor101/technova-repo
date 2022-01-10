import React, { Fragment } from "react";
import Header from "./Header";
import Mancha from "../images/mancha.png"
import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
  return (
    <Fragment>
    <Header/>
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle">{title}</p>
      </div>
      <div className="flexPanelProducts">
        <div className="leftPanelProducts">
          <div className="optionsLeftPanel"></div>
        </div>

        <div className="RightPanelProducts">
           {!products ? (
            <i className="fas fa-sync fa-10x fa-spin"></i>
          ) : (
            products?.map((product) => (
              <ProductComponent product={product} key={product?.id} />
            ))
          )} 
        </div>
      </div>
      <div className="moreProducts">Next =&gt;</div>
    </div>
    </Fragment>
  );
};
