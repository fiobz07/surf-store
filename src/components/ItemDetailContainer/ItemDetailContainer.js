import { useParams } from "react-router-dom"
//import {getProductById} from '../../asynckMock';

import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { getDoc, doc } from "firebase/firestore"
import {db} from '../../services/firebase/firebasConfig'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { productId } = useParams()

    useEffect(() => {
        document.title = 'Detalle del producto'
    }, [])

    useEffect(() => {
        const docRef = doc(db, 'products', productId)

        getDoc(docRef).then( doc => {
            const data = doc.data();
            const productAdapted = {id: doc.id, ...data}
            setProduct(productAdapted);
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false);
        })

       /*  getProductById(productId).then(response => {
            setProduct(response)
        }).finally(() => {
            setLoading(false)
        }) */
    }, [productId])
    return (
        <div>
            <h4> Detalle de producto</h4>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer 