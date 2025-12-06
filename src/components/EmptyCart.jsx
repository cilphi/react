import { Link } from "react-router-dom";

export default function EmptyCart (){
    return(
        <section>
            <h2>Tu carrito está vacío,</h2>
            <h6>encuentra lo que buscas:</h6>
            <Link to="/">
                <button>Catálogo</button>
            </Link>
        </section>
    )
}
