import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"

const ItemCart =({id, name, quantity, price}) => {
    const {removeItem} = useContext(CartContext)
    return (
        <article style={{display:'flex', justifyContent:'space-around', backgroundColor: '#f5f5f9fd'}}> 
            <h3>{name} </h3>
            <h4>cantidad {quantity} </h4>
            <h4>precio uni: ${price} </h4>
            <h4>subtotal: ${price * quantity } </h4>
            <button className="btn btn-danger" onClick={() => removeItem(id)}>Borrar</button>
        </article>
    )
}
export default ItemCart