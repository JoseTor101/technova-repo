import React, { Fragment, useState } from 'react';
import Footer from '../Footer';
import Header from "../Header";
import AddComp from './AddComp';
import AddTv from './AddTv';
import AddCel from './AddCel';
import AddGad from './AddGad';

const AdminViewR = () =>{
  return (
    <Fragment>
        <Header></Header>
        <div className='containerHeaderNewProduct'>
           <h1 className='headerNewProduct'>Ingresar nuevo producto</h1>
        </div>
        <div className='addingType'>
          <a href='#computers'>Computadores</a>
          <a href='#tvs'>Televisores</a>
          <a href='#smartphones'>Celulares</a>
          <a href='#gadgets'>Accesorios</a>
        </div>
        <div className='bottomAdmin'>
          <AddComp/>
        </div>
        <div className='bottomAdmin'>
          <AddTv/>
        </div>
        <div className='bottomAdmin'>
          <AddCel/>
        </div>
        <div className='bottomAdmin'>
          <AddGad/>
        </div>
  
        <Footer/>
        </Fragment>
  )
  
};

export default AdminViewR;
