import './CartWidget.css'
import carticon from '../assets/carticon.png'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../hooks/useCart'

function CartWidget (){
    const navigate = useNavigate();    
    const {getCartQuantity} = useCart();
    const quantity = getCartQuantity();

    return(
        <button type='button' className='btn' onClick={() => navigate('/cart')}>
            <img src={carticon} />
            <span className='badge rounded-pill'>
                {quantity}
            </span>
        </button>
    )
}

export default CartWidget