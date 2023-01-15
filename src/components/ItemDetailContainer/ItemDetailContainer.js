import { useParams } from "react-router-dom"
import {getProductById} from '../../asynckMock';
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        })
    }, [productId])
    return (
        <div>
            <h1> Detalle de producto</h1>
            <ItemDetail {... product} />
        </div>
    )
}

export default ItemDetailContainer 