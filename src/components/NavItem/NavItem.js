import React from "react";
import {Link} from 'react-router-dom'

const NavItem =  ({id, name}) => {
  return (
    <Link className="btn btn-secondary" role="button" to={`/category/${id}`}> {name} </Link>
  )
};

export default NavItem;