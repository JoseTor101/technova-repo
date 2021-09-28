import React from "react";
import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
  return (
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
  );
};
