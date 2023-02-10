import React from 'react';
import './Cartwidget.scss';
import { IconContext } from "react-icons";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Cartwidget = ({ totalQuantity }) => {

    if(totalQuantity === 0){
        return null;
    }

  return (
    <Link to='/cart' className="Cartwidget">
      <IconContext.Provider value={{ size:'2em', color: "blueviolet" }}>
          <FaShoppingBasket />
      </IconContext.Provider>
      
      {totalQuantity}
    </Link>
  )
};


export default Cartwidget;
