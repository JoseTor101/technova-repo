import React, { Fragment, useState } from "react";
import ModalSI from "./ModalSI";
import logo from "../icons/technova-logo1.jpg";
import user from '../icons/user.png'

const Header = () => { 
  
  const [HasAccount, setHasAccount] = useState(false)

  const userPhotoState = (user) => {
    setHasAccount(user)
  }

  return (
    <Fragment>
      <header className="header_startingScreen">
        <div id="title_store">
          <div className="divHeaderT">
            <img src={logo} alt="logo" height="auto" width="100vw"></img>
            <h1>
              <a href="/">TECHNOVA</a>
            </h1>
          </div>
        </div>
     
        <div className="header_side_right">
          <nav className="navHeader">
            <a href="#jump_start" className="a_items_header">
              Inicio
            </a>
            
            <a href="#jump_about_us" className="a_items_header">
              Sobre nosotros
            </a>
            <a href="#jump_contact" className="a_items_header">
              Contacto
            </a>
          {HasAccount === true ?  <img src={user} alt="user" className="user_photo"></img> :  <ModalSI className="button_header" userPhotoState = {userPhotoState}/> }
         </nav>
        </div> 

        {/* { <div className="header_side_right respMenu">
        <input type="checkbox"></input>
          <i className="fas fa-bars"></i>
          <i className="fas fa-times"></i>
          <nav className="navHeader">
          <ul className="burgerMenu">
              <li>
              <a href="#jump_start" className="a_items_header">
              Inicio
            </a>
              </li>
              <li>
              <a href="#jump_about_us" className="a_items_header">
              Sobre nosotros
            </a>
              </li>
              <li>
              <a href="#jump_contact" className="a_items_header">
              Contacto
            </a>
              </li>
              <li>
              {HasAccount === true ?  <img src="http://assets.stickpng.com/images/585e4beacb11b227491c3399.png" alt="user" className="user_photo"></img> :  <ModalSI className="button_header" userPhotoState = {userPhotoState}/> }
              </li>
              
            </ul>
            
         </nav>
        </div>
           } */}
      </header>
      </Fragment>
    
  );
};
export default Header;
