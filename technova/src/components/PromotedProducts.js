import React from 'react';
import promotedProduct1 from '../images/promocionado1.jpg';
import promotedProduct2 from '../images/promocionado2.jpg';
import promotedProduct3 from '../images/promocionado3.jpg';
import promotedProduct4 from '../images/promocionado4.jpg';
import promotedProduct5 from '../images/promocionado5.jpg';
import promotedProduct6 from '../images/promocionado6.jpg';

const PromotedProducts = () => {
    return <div className="div_promoted_products">
        <div className="subdivision_one_promoted_products">
            <div>
                <center>
                  <img src={promotedProduct3} className="img_promoted_products" alt=""></img>
                </center>
            </div>
            <div>
               <center>
                 <img src={promotedProduct2} className="img_promoted_products" alt=""></img>  
               </center>
            </div>
            <div>
               <center>
                  <img src={promotedProduct1} className="img_promoted_products" alt=""></img> 
               </center>
            </div>
        </div>
        <div className="subdivision_two_promoted_products">
            <div>
                <center>
                  <img src={promotedProduct4} className="img_promoted_products" alt=""></img> 
                </center>
            </div>
            <div className="promoted5">
                <center>
                    <img src={promotedProduct6} className="img_promoted_products" alt="" ></img>
                </center>
            </div>
            <div>
                <center>
                 <img src={promotedProduct5} className="img_promoted_products" alt=""></img> 
                </center>
            </div>
        </div>
    </div>
}
export default PromotedProducts; 