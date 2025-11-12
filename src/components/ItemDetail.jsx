import ItemCount from './ItemCount'

/* Presentación */

export default function ItemDetail ({detail}){
    return (
        <section style={{
            display:"flex",
            flexDirection:"column",
            gap:16,
            justifyContent:"center",
            width:"100%",
            backgroundColor:"#fcfcfe",
            border:"2px solid #ad9d37",
            borderRadius: 16,
            marginTop:24,
            height:600,
            padding:16,
        }}>
            <h2>Detalles del Producto</h2>
            <h3>{detail?.title}</h3>
            <article style={{
                backgroundColor:"3d3a58",
            }}>
                <img style={{width:200,}} src={detail?.thumbnail} alt={detail?.title} />
            </article>
            <p>{detail?.description}</p>
            <p>Precio: ${detail?.price}</p>
            <p>Stock disponible: ${detail?.stock}</p>
            <ItemCount/>
        </section>
    )
}