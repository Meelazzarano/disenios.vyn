//React Arrow Function Export Component rafce snipet para hacer las funciones

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Productos' element={<ItemListContainer/>} />
        <Route path='/Categorias/:categoryID' element={<ItemListContainer/>} />
        <Route path='/Productos/:productoTitle' element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
