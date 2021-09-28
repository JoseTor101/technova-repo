import React from 'react';
import Footer from './Footer';
import Header from './Header'; 
import SlideShowStartingScreen from './ImageSliderStartingScreen';
import ProductCategories from './ProductCategoriesSection';
import PromotedProducts from './PromotedProducts';
import AboutUs from './AboutUs';

const StartingScreen = () => {

    return <div className="starting_screen_div" id="jump_start">
        <div>
            <Header/>
        </div>
        <div>
            <ProductCategories/>
        </div>
       <div>
           <SlideShowStartingScreen/>
       </div>
       <div>
           <PromotedProducts/>
       </div>
       <div>
            <AboutUs/>
       </div>
       <div>
           <Footer/>
       </div>

    </div>

}
export default StartingScreen; 

