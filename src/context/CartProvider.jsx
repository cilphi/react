import { CartContext } from "./CartContext"
import { useState } from "react"


export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const getCartQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)

    const addToCart = product => setCart([... cart, product])

    const clearCart = () => setCart([])
    
    return (
        <CartContext.Provider value={{getCartQuantity, addToCart, cart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}