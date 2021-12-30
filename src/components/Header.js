import React, { Fragment, useState } from "react";
import ModalSI from "./ModalSI";
import logo from "../icons/technova-logo1.jpg";
import user from '../icons/user.png';

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

          {/* <div className="cart">
          <box-icon name="cart"></box-icon>
          <span className="item__total">0</span>
        </div>  */}

      </header>
      </Fragment>
    
  );
};
export default Header;