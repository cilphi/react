import { useNavigate } from "react-router-dom"

/* Presentación */

export default function Item ({item}){
    
    const navigate = useNavigate()

    return (
        <>
            <article style={{
                display:"flex",
                flexDirection:"column",
                gap:2,
                width:250,
                justifyContent:"center",
                backgroundColor:"#fcfcfe",
                borderRadius: 16,
                border:"2px solid #ad9d37",
                alignItems:"center",
                padding:16,
            }} key={item.id}>
                <img style={{width:200, height:200, alignItems:"center",}} src={item.thumbnail} alt={item.title} />
                <h3 style={{height:98, width:215, overflow:"hidden", textAlign:"left",}}>{item.title}</h3>
                <p>Precio: ${item.price}</p>
                <div>
                    <button style={{backgroundColor: "#3d3a58",}} onClick={()=>navigate(`/item/${item.id}`)}>Ver más detalles</button>
                </div>
            </article>
        </>
    )
}