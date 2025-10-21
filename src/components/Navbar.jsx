import ludussados from '../assets/ludussados.png'
import Categories from './Categories'
import CartWidget from './CartWidget'

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

export default Navbar