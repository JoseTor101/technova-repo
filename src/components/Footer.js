import React from "react";
import InstagramIcon from "../icons/instagram.png";
import TwitterIcon from "../icons/gorjeo.png";
import WhatsappIcon from "../icons/whatsapp.png";
import FacebookIcon from "../icons/facebook.png";

const Footer = () => {
  return (
    <div id="jump_contact">
      <footer className="footer_startingScreen">
        <div className="container_footer">
          <div className="contact_footer">
            <h1>Contacto</h1>
          </div>
          <div className="flex_info_footer">
            <div className="info_footer">
              <h4>2651456</h4>
              <h4>305 963 8425</h4>
              <h4>Technova@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="container_footer">
          <div className="allies_footer">
            <h1>Aliados</h1>
          </div>
          <div className="flex_info_footer">
            <div className="info_footer">
              <h4>Lenovo</h4>
              <h4>Exito</h4>
              <h4>Samsung</h4>
            </div>
          </div>
        </div>

        <div className="container_footer_icons">
          <div className="icons_social_media">
            <a href="https://www.instagram.com/" target="blank">
              <img
                src={InstagramIcon}
                className="icons_footer"
                alt="redSocial"
              ></img>
            </a>
            <a href="https://www.whatsapp.com/" target="blank">
              <img
                src={WhatsappIcon}
                className="icons_footer"
                alt="redSocial"
              ></img>
            </a>
            <a href="https://www.twitter.com/" target="blank">
              <img
                src={TwitterIcon}
                className="icons_footer"
                alt="redSocial"
              ></img>
            </a>
            <a href="https://www.facebook.com/" target="blank">
              <img
                src={FacebookIcon}
                className="icons_footer"
                alt="redSocial"
              ></img>
            </a>
          </div>
        </div>
      </footer>
      <div></div>
    </div>
  );
};
export default Footer;
