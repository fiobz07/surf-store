import { useParams } from "react-router-dom"
import {getProductsByCategory} from '../../asynckMock';
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState ({})

    const {productId} = useParams ()
    useEffect (() => {
        getProductById (productId)
        .then (product =>  {
            setProduct (product)
        })
        .catch (error => { 
            console.log (error)
        })
    } ), []
    return (
        <div>
            <h1> Detalle de producto</h1>
            <ItemDetail {... product} />
        </div>
    )
}

export default ItemDetailContainer 