import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ProductComponent } from "./ProductComponent";
import FloatingCart from "../FloatingCart";

export const ProductsComponent = ({ products, title }) => {
  const [image, setImage] = useState();

  const images= [
    "https://i.pinimg.com/564x/15/da/d0/15dad0aa38a3ff88953e388b90ff268b.jpg",
    "https://i.pinimg.com/564x/88/5c/a2/885ca2362d3c524e1bbc7a5015a8a480.jpg",
    "https://i.pinimg.com/564x/b4/2c/3a/b42c3a7c1eb4500f34000c38fef1ff4b.jpg"];
  
    const changeImage = () => {
      const randomNumber = Math.floor(Math.random() * images.length);
      setImage(randomNumber);
    }

    useEffect(() => {
      changeImage();
    }, []);
    

  return (
    <Fragment>
    <Header/>
    <div className="sectionBackground">
      <div className="sectionHeader">
        <p className="sectionTitle">{title}</p>
      </div>
      <div className="flexPanelProducts">
        <div className="leftPanelProducts">
          <div className="optionsLeftPanel"><img src={images[image]} alt=""></img></div>
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
      <FloatingCart></FloatingCart>
    </div>
    <Footer></Footer>
    </Fragment>
  );
};
