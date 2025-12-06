import { CartContext } from "./CartContext"
import { useState } from "react"
import toast from 'react-hot-toast';


export default function CartProvider({ children }) {

    const [cart, setCart] = useState([])

    const getCartQuantity = () => cart.reduce((acc, current) => acc + current.count, 0)

    const addToCart = product => {
        const isInCart = cart.some(item => item.id === product.id)

        if(isInCart){
        toast.error("Ya se encuentra en tu carro, visítalo para seguir con la compra.")
        return
        }
        setCart([... cart, product])
        toast.success(`¡Se ha agregó ${product.title} al carrito!`)
    }

    const deleteItem = product => {
        const updateCart = cart.filter(item => item.id !== product.id)
        setCart(updateCart)
        toast.success(`¡Se ha eliminado ${product.title} del carrito!`)
    }

    const clearCart = () => {
        toast.success(`¡Se ha vaciado completamente el carrito!`);
        setCart([])
        return
        }

    const getTotal = () => cart.reduce((acc, current) => acc + (current.count*current.price), 0)
    
    return (
        <CartContext.Provider value={{getCartQuantity, addToCart, cart, deleteItem, clearCart, getTotal}}>
            {children}
        </CartContext.Provider>
    )
}