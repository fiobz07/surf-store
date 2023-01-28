import {useState, createContext} from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart) 

    const addItem = (productToAdd) => {
        if (!isInCart (productToAdd.id)) {
            setCart (prev =>  {
                console.log (prev)
                return [...prev, productToAdd]
            })
        } else {
            console.error ('YA ESTA AGREGADO')
        }
    }
    const isInCart = (id) => cart.some(prod => id === prod.id)

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id);
        setCart(cartUpdated);
    }

    const getTotalQuantity = () => {
        let accu = 0    

        cart.forEach(prod => {
            accu += parseInt(prod.quantity)
        })
        
        return accu 
    }
    const totalQuantity = getTotalQuantity()

    return (
        <CartContext.Provider value = {{cart, addItem, isInCart, totalQuantity, removeItem}}>
            {children}
        </CartContext.Provider>
    )

}