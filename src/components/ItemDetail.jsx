import './ItemDetail.css' 
import ItemCount from './ItemCount'

export default function ItemDetail ({detail}){
    return (
        <main>
            <h2>Detalle del Producto</h2>
            <section className='detail'>
                <article>
                    <img src={detail?.thumbnail} alt={detail?.title} />
                </article>
                <div className='details'>                
                    <h3>{detail?.title}</h3>
                    <p>{detail?.description}</p>
                    <p>Precio: ${detail?.price}</p>
                    <p>Stock disponible: {detail?.stock}</p>
                    <ItemCount item={detail}/>
                </div>
            </section>
        </main>
    )
}