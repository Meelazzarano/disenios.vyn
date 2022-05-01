//React Arrow Function Export Component rafce snipet para hacer las funciones

import './App.css';
import CartWidget from './Components/CartWidget';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemList from './Products/ItemList';

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <ItemListContainer greeting='BIENVENIDO!'/>

    </>
  );
}

export default App;
