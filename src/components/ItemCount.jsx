import './ItemCount.css'
import { useState } from "react"
import { useCart } from "../hooks/useCart";
import toast from 'react-hot-toast';


function ItemCount ({item}){
    const [counter, setCounter] = useState(0);
    const {addToCart} = useCart();

    const handleSubstract = () =>{
        setCounter(counter - 1)
    }

    const handleAdd = () =>{
        setCounter(prev => {
            const stock = item?.stock;
            if (prev >= stock) {
                toast.error('Has agregado todo lo que queda, muchas gracias por preferirlo.')
                return prev
            }
            return prev + 1
        })
    }

    const handleCart = () => {
        addToCart({ ...item, count: counter })
    }

    return (
        <div className='counter'>
            <button className="sub" onClick={handleSubstract} disabled={counter === 0}>-</button>
            <p>{counter}</p>
            <button className="add" onClick={handleAdd} disabled={counter > (item?.stock)}>+</button>
            <button className="agree" onClick={handleCart} disabled={counter === 0}>Agregar</button>
        </div>
    )
}

export default ItemCount