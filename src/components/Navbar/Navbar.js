import React from 'react';
import {useContext} from 'react'
import Cartwidget from '../Cartwidget/Cartwidget';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import {CartContext} from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const Navbar = () =>{

  const navigate = useNavigate();
  const {totalQuantity} = useContext(CartContext)


  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
      <h1 onClick={()=>navigate("/")}> Ecommerce</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width:'75%'}}>

        <Link className="btn btn-secondary" role="button"to="/"> Ver todo </Link>
        <Link className="btn btn-secondary" role="button"to="/category/tablas_de_surf"> Surf </Link>
        <Link className="btn btn-secondary" role="button"to="/category/tablas_de_skate"> Skate </Link>
        <Link className="btn btn-secondary" role="button"to="/category/tablas_de_snow"> Snow </Link>
        <Cartwidget totalQuantity={totalQuantity} />
      </div>
    </nav>
  )
} ;

export default Navbar;
