import {useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"



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
            <button onClick={() => onConfirm(count)}>Agregar al carrito</button>
        </div>
    )
}


const ItemDetail = ({ id, name, category, img, price, stock, description}) => {
    const [quantity, setQuantity] = useState(0)

    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito: ', quantity)

        setQuantity(parseInt(quantity))
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
            </section>
            <footer className='ItemFooter'>
                {
                    quantity > 0 ? (
                        <Link to='#'>Terminar compra</Link>
                    ) : (
                        <InputCount stock={stock} onConfirm={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail 