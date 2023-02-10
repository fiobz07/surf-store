import ItemCart from "../ItemCart/ItemCart"
import './CartList.scss'
const CartList=( {cart} ) => {

    return (
        <div className="cartList">
         {
            cart.map(prod => <ItemCart key={prod.id}{...prod}  />)
         }
        </div>
    )
}
export default CartList 