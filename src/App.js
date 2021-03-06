//React Arrow Function Export Component rafce snipet para hacer las funciones

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import CartContextProvider from './Context/CartContextProvider';
import Cart from './Components/Cart';
import Form from './Components/Form';
import FormContextProvider from './Context/FormContextProvider';
import Instructions from './Components/Instructions';

function App() {
  return (
    <>
    <CartContextProvider>
    <FormContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Cart' element={<Cart/>} />
          <Route path='/' element={<Home/>} />
          <Route path='/ComoTrabajamos' element={<Instructions/>} />
          <Route path='/Productos' element={<ItemListContainer/>} />
          <Route path='/Categorias/:categoryID' element={<ItemListContainer/>} />
          <Route path='/Productos/:id' element={<ItemDetailContainer/>} />
          <Route path='/Form' element={<Form/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FormContextProvider>
    </CartContextProvider>    
    </>
  );
}

export default App;
