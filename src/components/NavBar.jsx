import ludussados from '../assets/ludussados.png';
import CartWidget from './CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

/* Presentación */

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
                    <NavDropdown.Item as={Link} to={`/category/${cat}`} key={cat.id} style={{width:"50%",}} > 
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

/*
function Navbar (){
    
    return(
        <header>
            <nav>
                <div>
                    <img src={ludussados} alt="" />
                </div>
                <div>
                    < Categories text1= 'Estrategia' text2= 'Euro' text3= 'Party'/>
                    < CartWidget/>
                </div>
            </nav>
        </header>
    )
}
*/