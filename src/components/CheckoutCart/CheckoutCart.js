import {useContext, useState} from 'react'
import {CartContext} from '../../Context/CartContext';
import {collection, query, where, documentId, getDocs, writeBatch, addDoc} from "firebase/firestore";
import {db} from '../../services/firebase/firebasConfig'
import FormCheckout from "../FormCheckOut/FormCheckout";

const checkoutCart = () => {
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState('')
  const {cart, total, clearCart} = useContext(CartContext)

  const createOrder = async (name, phone, email) => {
    setLoading(true);
    try {
      const orderObject = {
        buyer: {
          name: 'Fiorella Baez',
          phone: '1234555332',
          email: 'fiorella@gmail.com'
        },
        items: cart,
        total
      }
      const batch = writeBatch(db);

      const ids = cart.map(prod => prod.id);

      const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))

      const productsAddedToCartFromFirestore = await getDocs(productsRef)

      const {docs} = productsAddedToCartFromFirestore

      const outOfStock = []

      docs.forEach(doc => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cart.find(product => product.id === doc.id)
        const productQuantity = productAddedToCart.quantity

        if (stockDb >= productQuantity) {
          batch.update(doc.ref, {stock: stockDb - productQuantity})
        } else {
          outOfStock.push({id: doc.id, ...dataDoc})
        }
      })

      if (outOfStock.length === 0) {
        await batch.commit()

        const orderRef = collection(db, 'orders')

        const orderAdded = await addDoc(orderRef, orderObject)



        //order generada
        const {id} = orderAdded;
        setOrderId(id);
        clearCart()
      } else {
        console.error('Productos fuera de Stock')
      }
    } catch (error) {
      console.error(error)

    } finally {
      setLoading(false)
    }

  }

  if (loading) {
    return (
      <div>
        <h3>Generando orden...</ h3>
      </div>
    )
  }

  if(orderId){
    return (
      <div>
        <h3>El Id de su compra es: {orderId}</ h3>
      </div>
    )
  }

  if(cart.length === 0){
    return (
      <div>
        <h3>No hay productos en el carrito de compras</ h3>
      </div>
    )
  }

  return (
    <div>
      <h1>checkout</h1>
      <FormCheckout onGenerateOrder={createOrder}/>
    </div>
  )
}

export default checkoutCart;