import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import NavBarContainer from './components/NavBarContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBarContainer/>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />}/>
        <Route path="*" element={ <div>Este contenido aún no está disponible. ¡Gracias por el interés!</div> }/>
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App
