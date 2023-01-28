import { Link } from 'react-router-dom'
import "./Item.css"
import {useContext} from 'react'
import {CartContext} from '../../Context/CartContext';

const Item = ({id, name, img, price}) => {

    
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
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    )
}

export default Item 