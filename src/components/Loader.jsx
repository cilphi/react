import { Spinner } from "react-bootstrap";

export default function Loader( { render, items }) {
    if (items.length < 1) {
        return (
        <Spinner animation="border" variant="warning">
            <span className="visually-hidden">Cargando...</span>
        </Spinner>)
    }
    return (
        render()
    );
}