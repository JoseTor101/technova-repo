import React, { Fragment } from 'react';
import '../App.css';
import computerandhands from '../images/computerandhands.jpg';
import people_and_phones from '../images/phonewallpaper1.jpg';
import tvwallpaper from '../images/tvwallpaper.jpg';





const SlideShowStartingScreen = () => {
 return <Fragment>      

    <div className="slider" >
        <input type="radio" name="slider" checked="checked"></input>
        <div className="imgBx">
            <img loading="lazy" src={computerandhands} alt=""></img>
            <div className="content">
                <h2>Computadores</h2>
                <p>Los computadores te permiten realizar cualquier tipo de tarea, ya sea en el trabajo, la escuela o el hogar; la velocidad de los nuevos modelos mejorará tu eficiencia sin lugar a dudas.</p>
                
            </div>
        </div>

        <input type="radio" name="slider"></input>
        <div className="imgBx">
            <img loading="lazy" src={people_and_phones}alt=""></img>
            <div className="content">
                <h2>Celulares</h2>
                <p>Los celulares te permiten conectar con el resto del mundo desde la palma de tu mano. Aquí encuentras los dispositivos más rápidos, duraderos y a precios muy bajos ¡Echa un vistazo a nuestros productos!</p>
                
            </div>
        </div>

        <input type="radio" name="slider"></input>
        <div className="imgBx">
            <img loading="lazy" src={tvwallpaper} alt=""></img>
            <div className="content">
                <h2>Televisores</h2>
                <p>¿Qué mejor que pasar una buen rato en la comodidad de tu hogar viendo un programa solo o acompañado? Estos televisores te ofrecen las mejores experiencias del mercado. </p>
                
            </div>
        </div>

       </div>
    </Fragment>
}
export default SlideShowStartingScreen;