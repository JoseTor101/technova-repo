import React from "react";

const AboutUs = () => {
  return (
    <div id="jump_about_us">
      <div className="title_about_us">
        <h1>Sobre nosotros</h1>
      </div>
      
        <div className="text_about_us">
            <h4>Technova es una tienda virtual de venta de diversos dispositivos tecnológicos<br></br> 
           que tiene como propósito brindar la mejor atención a sus usuarios apoyado en herramientas tecnológicas<br></br>
            las cuales permiten brindar seguridad y confianza en las compras de cada uno de sus clientes.</h4>

        </div>
        <div className="div_items_about_us">
            <div className="items_about_us">
                <img src="http://asesor-fiscal-cdmx.com/wp-content/uploads/mision-icono.png" className="img_items_about_us" alt="img_items_about_us"></img>
                <h3 className="title_about_us">Misión</h3>
                <h5 className="text_items_about_us">
                    Cambiar el pensamiento en las personas sobra la compra en linea y garantizar la seguridad en cada uno de nuestros procesos.     
                </h5>
            </div>
            <div className="line_items_about_us"></div>
            <div className="items_about_us">
                <img src="https://i0.wp.com/pensemos.com/wp-content/uploads/2014/08/pensemos-mejora-continua.png?w=1080" className="img_items_about_us" alt="img_items_about_us"></img>
                <h3 className="title_about_us">Visión</h3>
                <h5 className="text_items_about_us">
                    Ser reconocidos a nivel nacional como una empresa confiable y con una excelente calidad. 
                </h5>
            </div>
            <div className="line_items_about_us"></div>
            <div className="items_about_us">
            <img src="https://media.mktg.workday.com/is/image/workday/illustration-people-on-bar-charts-1?fmt=png-alpha&wid=1000" className="img_items_about_us" alt="img_items_about_us"></img>
                <h3 className="title_about_us">Pilares</h3>
                <h5 className="text_items_about_us">
                    Trabajamos en base a los principios de la cooperación, el respeto y la aceptación del cambio. 
                </h5>
            </div>
        </div>
      </div>    
  );
}

export default AboutUs;
