import React, { Fragment, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
  //Agregar función para que se promocione una imagen diferente cada vez que se entre
  // const promotedImg = () => {
  // }

  console.log(products);

  return (
    <Fragment>
    <Header/>
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle">{title}</p>
      </div>
      <div className="flexPanelProducts">
        <div className="leftPanelProducts">
          <div className="optionsLeftPanel"><p>Agregar lógica para que cada vez que se entre se cambie la imagen promocionada, mirar la posibilidad de filtros de búsqueda</p></div>
        </div>

        <div className="RightPanelProducts">
          {!products ? (
            <h4>Cargando...</h4>
          ) : (
            products?.map((product) => (
              <ProductComponent product={product} key={product?.id} />
            ))
          )}  

        </div>
      </div>
      <div className="moreProducts">Next =&gt;</div>
    </div>
    <Footer></Footer>
    </Fragment>
  );
};
