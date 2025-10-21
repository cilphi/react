import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    < Navbar/>
    < ItemListContainer title= 'Nuestra tienda abrirá pronto, les esperamos'/>
      
      <p className="read-the-docs">
        Gracias por visitarnos
      </p>
    </>
  )
}

export default App
