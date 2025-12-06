import { Link } from "react-router-dom";

export default function EmptyCart (){
    return(
        <main>
            <h2>Carro de compras vacío</h2>
        <section className="cart">
            <h6>Encuentra lo que buscas en nuestro:</h6>
            <Link to="/">
                <button className="agree">Catálogo</button>
            </Link>
        </section>
        </main>
    )
}
