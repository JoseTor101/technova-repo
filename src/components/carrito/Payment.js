
import React, { useState } from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

export default function Payment(){
    const [price, setPrice] = useState();

    const createOrder= (data, actions) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                value: price,
                // value: conversion,
              },
            },
          ],
        });
      }
    const onApprove = (data, actions)=> {
        return actions.order.capture(handlePay());
      }
    

    function handlePay() {
        alert ('Muchas gracias :) Pago exitoso');
        // window.location.href = "http://localhost:3001/technova";
    }
    function handleChange(e) {
        setPrice(e.target.value);
    }

    // var dolar = 3900;
    // var conversion = total / dolar ;
    return(<div className="payment" id="payment">
        <p>Nuestra página aún está en versión beta! Pero puedes apoyar nuestro trabajo</p>
        <h3>Monto a donar: </h3>
        <input type="number" min="0" onChange={handleChange} id="inputPayment"placeholder="Escriba el monto en dólares (USD)"></input>
        <PayPalButton
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
      />
    </div>)
}

