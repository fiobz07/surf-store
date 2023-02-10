import { CartContext } from "../../Context/CartContext";
import CartList from "../CartList/Cartlist";
import {useState, useContext} from "react"
import {Link} from "react-router-dom";
import './Cart.scss'

const Cart= () => {
    const {cart} = useContext(CartContext)
    return (
        <div className="cart">
            <h1> Estos son los productos de tu carrito</h1>
            <CartList cart={cart}/>
            <Link type="button" className="btn btn-secondary cart-checkout" to='/checkout'>Realizar compra  </Link>
        </div>
    )
}
export default Cart;