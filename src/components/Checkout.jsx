import './Checkout.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useCart } from '../hooks/useCart';
import { createOrder } from '../firebase/db';
import { serverTimestamp } from 'firebase/firestore';

function Checkout() {
    const { getTotal, cart} = useCart()
    const hadleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        let order = {
            buyer:{ email, name, phone },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        createOrder(order)
    }

    return (
        <main>
            <h2>Checkout</h2>
            <Form className="col-md-8 mx-auto" onSubmit={hadleSubmit}>
                <Form.Text className="fw-bold">
                    Para facturar y entregar tu pedido, necesitamos los siguientes datos:
                </Form.Text>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
                <Form.Text className="text-muted">
                No compartiremos tu dirección.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Pepita" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control type="number" placeholder="012345679" required />
            </Form.Group>

            <Button variant="success" type="submit">
                Finalizar compra
            </Button>
            </Form>
        </main>
    );
}

export default Checkout;