import React,  { useState, Fragment } from "react";
import Producto from "./Producto.js";
import ShoppingCartIndividualStructure from "./ShoppingCartIndividualStructure";
const ShoppingCartView = () => {
   

  //Crear listado de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 50 },
    { id: 3, nombre: 'Camisa Node.js', precio: 50 },
    { id: 4, nombre: 'Camisa Angular', precio: 50 },
  
  ]);
  
  //State para un carrito de compras
  const [ carrito, agregarProducto] = useState([]);

  // * El primer valor de la constante es la referencia hacia el valor del state y el segundo el que va a modificarlo
  
  return (
  <Fragment>
      <h1>Tienda virtual</h1>
      <h2>Lista de productos</h2>
      {productos.map(producto => (
        <Producto
        key={producto.id}
        producto={producto}
        productos={productos}
        carrito={carrito}
        agregarProducto={agregarProducto}
          />
      ))}

      <ShoppingCartIndividualStructure 
       carrito={carrito}
       agregarProducto={agregarProducto}/>

  </Fragment>
  );
}

export default ShoppingCartView;


// import Header from "../components/Header";
// import fish from "../icons/fish.gif";


// const ShoppingCartView = () => {
  
//   return (
//     <div className="shoppingCartBackground">
//       <Header />
//       <div className="shoppingCartProducts">
//           <div className="shoppingCartProductsHeader">
//             <div id="productAmount">
//               <p id="productAmountText">
//                 Productos en carrito(Número de productos) (imagen de carrito)
//               </p>
//             </div>
//           </div>

//           <div className="shoppingProductsList">
            
//             <div className="detailProductShoppingCart">
//               <div className="detailProductImg"><img src={fish} alt="cartimg" className="cartPimg"></img></div>
//               <div className="detailProductName">Nombre</div>
//               <div className="detailProductDescription">Descripcion</div>
//               <div className="detailProductPrice">Precio</div>
//             </div>
            
//           </div>
//         </div>
//       </div>
//   );
// };


// export default ShoppingCartView;
