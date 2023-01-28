import React from 'react';
import './Cartwidget.css';
import { IconContext } from "react-icons";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cartwidget = ({ totalQuantity }) => {
  return (
    <Link to='/cart' className="Cartwidget">
      <IconContext.Provider value={{ size:'2em' }}>
          <FaShoppingBasket />
      </IconContext.Provider>
      
      {totalQuantity}
    </Link>
  )
};


export default Cartwidget;
