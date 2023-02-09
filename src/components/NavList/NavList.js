import { memo } from 'react'
import NavItem from '../NavItem/NavItem'
import {Link} from 'react-router-dom'

const NavList = ({ categories }) => {
  return(
    <div className='NavListGroup' style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '60%'}}>
      <Link className="btn btn-secondary" role="button" to="/"> Ver Todo </Link>
      {categories.map(category => <NavItem key={category.id} {...category} />)}
    </div>
  )
}

export default memo(NavList)