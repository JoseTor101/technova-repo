import React, { Fragment, useState } from "react";
import ModalSI from "./forms/ModalSI";
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
              <a href="/technova">TECHNOVA</a>
            </h1>
          </div>
        </div>

        <div className="header_side_right">
          <nav className="navHeader">
            <a href="/" className="a_items_header headerMenu">
              Categorias
              <ul className="headerA">
                <li><a href="/tvs">Televisores</a></li>
                <li><a href="/computers">Computadores</a></li>
                <li><a href="/smartphones">Celulares</a></li>
                <li><a href="/gadgets">Accesorios</a></li>
              </ul>
            </a>
            
            <a href="/AboutUs" className="a_items_header">
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