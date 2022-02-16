import React from "react";
import CategoryComputers from "../categories-images/CategoryComputers";
import CategoryTvs from "../categories-images/CategoryTvs";
import CategorySmartphones from "../categories-images/CategorySmartphones";
import CategoryGadgets from "../categories-images/CategoryGadgets";
import { Link } from "react-router-dom";

const ProductCategories = () => {
  return (
    <div className="background_section_product_categories">
      <div className="div_section_product_categories">

      <div className="div_category_product">
        <Link className="link link--text-center" to="/tvs">
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategoryTvs />
            </div>
          </div>
          <div>
            <h4 className="categoryh4"> Televisores</h4>
          </div>
        </Link>
      </div>

      <div className="div_category_product">
        <Link className="link link--text-center" to="/computers">
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategoryComputers />
            </div>
          </div>
          <div className="categoryh4">
            <h4>Computadores</h4>
          </div>
        </Link>
      </div>
      <div className="div_category_product">
        <Link className="link link--text-center" to="/smartphones">
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategorySmartphones />
            </div>
          </div>
          <div>
            <h4> Smartphones</h4>
          </div>
         </Link>
        </div>
     
        <div className="div_category_product">
         <Link className='link link--text-center' to='/gadgets'>
          <div className="categoryProduct">
            <div className="div_img_category">
              <CategoryGadgets />
            </div>
          </div>
          <div>
            <h4> Gadgets</h4>
          </div>
        </Link>
      </div>
      </div>
    </div>
  );
};
export default ProductCategories;