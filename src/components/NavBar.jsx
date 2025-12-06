import './NavBar.css'
import ludussados from '../assets/ludussados.png';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

export default function NavBar({categories}) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to='/'><img src={ludussados} alt="Ludussados" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="collapsible-nav-dropdown">
                            {categories.map(cat => (
                            <NavDropdown.Item as={NavLink} to={`/category/${cat}`} key={cat.id} > 
                            {cat}
                            </NavDropdown.Item> ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                < CartWidget/>
            </Container>
        </Navbar>
    );
}