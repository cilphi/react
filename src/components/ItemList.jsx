import './ItemList.css'
import Item from "./Item";

export default function ItemList ({ items }) {
    return (
        <main>
            <h2>Catálogo Ludussados</h2>
            <section className='item-card'>                
                {items.map(item => <Item item={item} key={item.id} />)}
            </section>
        </main>
    )
}