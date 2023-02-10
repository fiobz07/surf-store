import {useState, useContext} from "react"
import { Link } from "react-router-dom"
import {CartContext} from '../../Context/CartContext';
import {NotificationContext} from '../../notification/NotificationService';
import './IteamDetail.scss'



const InputCount = ({onConfirm, stock, initial= 1}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (event) => {
        if(event.target.value <= stock) {
            setCount(event.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button type="button" className="btn btn-secondary" onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState()
    
    const {addItem, isInCart} = useContext(CartContext)

    const setNotification = useContext(NotificationContext)

    const handleOnAdd = (quantity) => {

        addItem({id, name, price, quantity})
        setNotification(`Se agrego correctamente ${quantity} ${name}`, 3, 'success')
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
        
                <img src={img} alt={name} className="ItemImg"/>
            
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>

                <p className="Info">
                    Stock: {stock}
                </p>
            </section>
            <footer className='ItemFooter'>
                <InputCount stock={stock} onConfirm={handleOnAdd} />
                {
                    isInCart (id)  ? (
                        <Link type="button" className="btn btn-secondary"  to='/cart'>Terminar compra</Link>
                    ) : (
                      ''
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail 