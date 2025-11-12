import Item from "./Item";

/* Contenedor clave */

export default function ItemList ({ items }) {
    return (
        <section style={{
            marginTop:24,
            display:"flex",
            flexDirection:"row",
            flexWrap:"wrap",
            gap:16,
            justifyContent:"center",
        }}>
            {items.map(item => <Item item={item} key={item.id} />)}
        </section>
    )
}