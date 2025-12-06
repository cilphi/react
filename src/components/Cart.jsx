import './Cart.css'
import { useCart } from "../hooks/useCart"
import { useNavigate } from "react-router-dom"

export default function Cart (){
    const {cart,deleteItem, clearCart, getTotal} = useCart()
    const navigate = useNavigate()

    return (
        <main>
            <h2>Carrito de compras</h2>
            <section className='cart'>                
                <div className='purchase' >
                    {cart.map((prod) => (
                    <div className='data' key={prod.id}>
                        <img src={prod.thumbnail} alt={prod.title} />
                        <a onClick={()=>navigate(`/item/${prod.id}`)}><h5>{prod.title}</h5></a>
                        <p><b>Cantidad: </b></p>
                        <p>{prod.count}</p>
                        <p><b>Subtotal: </b>${prod.count * prod.price}</p>
                        <button className='sub' onClick={()=>deleteItem(prod)}> Eliminar del carrito </button>
                    </div>
                    ))}
                </div>
                <div className='summary'>
                    <h3>Monto total: ${getTotal()}</h3>    
                    <div className='cta'>
                        <button className='sub' onClick={()=>clearCart()}>Vaciar carro</button>
                        <button className='agree' onClick={()=>navigate('/checkout')}>Ir al Checkout</button>
                    </div>
                </div>
            </section>
        </main>
    )
}