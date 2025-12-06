import './Item.css'
import { useNavigate } from "react-router-dom"

export default function Item ({item}){
    const navigate = useNavigate()

    return (
        <article key={item.id}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Precio: ${item.price}</p>
            <div>
                <button onClick={()=>navigate(`/item/${item.id}`)}>Ver más detalles</button>
            </div>
        </article>
    )
}