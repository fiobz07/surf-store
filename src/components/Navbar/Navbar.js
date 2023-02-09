import React, {useEffect, useState} from 'react';
import {useContext} from 'react'
import Cartwidget from '../Cartwidget/Cartwidget';
import {useNavigate} from 'react-router-dom';
import './Navbar.css';
import {CartContext} from '../../Context/CartContext';
import NavList from '../NavList/NavList';
import {getDocs, collection} from 'firebase/firestore'
import {db} from '../../services/firebase/firebasConfig'

const Navbar = () => {

  const navigate = useNavigate();
  const {totalQuantity} = useContext(CartContext)
  const [categories, setCateries] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'categories')

    getDocs(collectionRef).then(response => {
      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return {id: doc.id, ...data}
      })
      setCateries(categoriesAdapted)
    }).catch(error => {
      console.log(error)
    }).finally(() => {
    })

  }, [])


  return (
    <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <h1 onClick={() => navigate("/")}> Surf - Store</h1>
      <div style={{width: '70%',display: 'flex',justifyContent: 'flex-end'}}>

        <NavList categories={categories}/>
        <Cartwidget totalQuantity={totalQuantity}/>
      </div>
    </nav>
  )
};

export default Navbar;
