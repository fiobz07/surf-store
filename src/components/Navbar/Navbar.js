import React from 'react';
import './Navbar.css';
import Cartwidget from '../Cartwidget/Cartwidget';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Navbar = () =>{
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
      <h1> Ecommerce</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width:'75%'}}>
        <Button variant="secondary" href='/'> Ver todo</Button>
        <Button variant="secondary" href='/category/tablas_de_surf'> Tabla Surf</Button>
        <Button variant="secondary"  href='/category/tablas_de_skate'> Tabla skate</Button>
        <Button variant="secondary"  href='/category/tablas_de_snow'> Tabla Snow</Button>
        <Cartwidget />
      </div>
    </nav>
  )
} ;

export default Navbar;
