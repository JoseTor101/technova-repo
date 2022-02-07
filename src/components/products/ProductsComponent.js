import React, { Fragment, useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { ProductComponent } from "./ProductComponent";

export const ProductsComponent = ({ products, title }) => {
  const [image, setImage] = useState();

  const images= [
    "http://pm1.narvii.com/6164/80165b49cd0a6dd44c43b957e17b1975cde81811_00.jpg",
    "https://www.eldibujante.top/wp-content/uploads/2020/08/tip-06-kawaii.jpg",
    "https://i.pinimg.com/564x/b4/2c/3a/b42c3a7c1eb4500f34000c38fef1ff4b.jpg"];
  
    const changeImage = () => {
      const randomNumber = Math.floor(Math.random() * images.length);
      setImage(randomNumber);
    }

    useEffect(() => {
      changeImage();
    }, []);
    

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
    </div>
    <Footer></Footer>
    </Fragment>
  );
};
