import { CartContext } from "../../Context/CartContext";
import CartList from "../CartList/Cartlist";
import {useState, useContext} from "react"

const Cart= () => {
    const {cart} = useContext(CartContext)
    return (
        <div>
            <h1> Estos son los productos de tu carrito</h1>
            <CartList cart={cart}/>
        </div>
    )
}
export default Cart;