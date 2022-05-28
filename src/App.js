//React Arrow Function Export Component rafce snipet para hacer las funciones

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CartContextProvider, { CartContext } from './Context/CartContextProvider';
import Cart from './Components/Cart';


function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/Productos' element={<ItemListContainer/>} />
          <Route path='/Categorias/:categoryID' element={<ItemListContainer/>} />
          <Route path='/Productos/:id' element={<ItemDetailContainer/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>    
    </>
  );
}

export default App;
