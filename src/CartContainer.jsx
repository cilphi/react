import { useCart } from "../hooks/useCart"
import EmptyCart from './EmptyCart'
import Cart from './Cart'

export default function CartContainer (){
    const {cart} = useCart()

    if(cart.length < 1){ 
        return (<EmptyCart />)
    }
    return ( <Cart/> )
}