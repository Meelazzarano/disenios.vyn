//React Arrow Function Export Component rafce snipet para hacer las funciones

import './App.css';
import CartWidget from './Components/CartWidget';
import Home from './Components/Home';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting='BIENVENIDO!'/>
      <Home/>
    </>
  );
}

export default App;
