

/* Importes */
import imagencard from '../assets/imagencard.png'
import Counter from './Counter'

/* Función Card */
function ItemListContainer ({title, price, text}){
    return (
        <section className = 'card'>
            <div className = 'contenido'>
                <h3>{title}</h3>
                <img src={imagencard} alt="" />
                <div className = 'texto'>
                    <p>{text}</p>
                    <p>{price}</p>
                </div>
                < Counter/>
            </div>
        </section>
    )
}

export default ItemListContainer