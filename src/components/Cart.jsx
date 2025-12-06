import './Cart.css'
import { useCart } from "../hooks/useCart"

export default function Cart (){
    const {cart, clearCart} = useCart()

    return (
        <section>
            <h2>Carrito de compras</h2>
            <div >
                {cart.map(prod => (
                <div prod={prod} key={prod.id}>
                    <img src={prod.thumbnail} alt={prod.title} />
                    <p>{prod.title}</p>
                    <button> - </button>
                    <p>{prod.count}</p>
                    <button> + </button>
                    <button> X </button>
                </div>
                ))}                
            </div>
            <div>
                <button onClick={()=>clearCart()}>Vaciar carro</button>
                <button>Finalizar compra</button>
            </div>
        </section>
    )
}