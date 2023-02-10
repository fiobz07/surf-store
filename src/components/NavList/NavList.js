import { memo } from 'react'
import NavItem from '../NavItem/NavItem'
import {Link} from 'react-router-dom'
import './NavList.scss'

const NavList = ({ categories }) => {
  return(
    <div className='navListGroup'>
      <Link className="btn btn-secondary" role="button" to="/"> Ver Todo </Link>
      {categories.map(category => <NavItem key={category.id} {...category} />)}
    </div>
  )
}

export default memo(NavList)