import ItemCart from "../Item/ItemCart/ItemCart"
const CartList=( {cart} ) => {

    return (
        <div>
         {
            cart.map(prod => <ItemCart key={prod.id}{...prod}  />)
         }
        </div>
    )
}
export default CartList 