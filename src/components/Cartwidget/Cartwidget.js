import React from 'react';
import './Cartwidget.css';
import { IconContext } from "react-icons";
import { FaShoppingBasket } from "react-icons/fa";

const Cartwidget = () => (
  <div className="Cartwidget">
    <IconContext.Provider value={{ size:'2em' }}>
        <FaShoppingBasket />
    </IconContext.Provider>
    
    0
  </div>
);


export default Cartwidget;
