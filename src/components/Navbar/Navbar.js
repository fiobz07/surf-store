import React from 'react';
import Cartwidget from '../Cartwidget/Cartwidget';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () =>{
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems:'center'}}>
      <h1> Ecommerce</h1>
      <div style={{display: 'flex', justifyContent: 'space-around', width:'75%'}}>
        <Button variant="secondary" href='/'> Ver todo</Button>
        <Button variant="secondary" href='/category/tablas_de_surf'>  Surf</Button>
        <Button variant="secondary"  href='/category/tablas_de_skate'> Skate </Button>
        <Button variant="secondary"  href='/category/tablas_de_snow'> Snow</Button>
        <Cartwidget />
      </div>
    </nav>
  )
} ;

export default Navbar;
