import { createContext, useContext, useState } from "react";



// ********************** Declaración del contecxto **********************
export const CartContext = createContext({});


// ******************** Función para usar el contexto ********************
// Es más prolijo. Te ahorras el import del useContext y del cartContext. Se importa solo el hook.
export const useCartContext = () => useContext(CartContext)  



// ******************* Función para scope del contexto *******************
const CartContextProvider = ( {children} ) => {

    const [cartList, setCartList] = useState([]);

    const isInCart = (id) => {
        return cartList.some (p => p.id === id)
    } 

    const addItem = (item, quantity) => {
        if ( isInCart(item.id)) {
            return setCartList ( cartList.map ( (p) => 
            p.id===item.id ? 
                {...p, quantity: p.quantity + quantity} 
                : p));
        } //esta parte significa que si está en el carrito, se vuelve a mapear con la cantidad correcta
        setCartList ([...cartList, {...item, quantity}]) //esta parte significa que si NO está en el carrito, lo agrega por primera vez
    } 

    const clearCart = () => {
        setCartList ( [] )
    }

    const removeItem = (id) => {
        setCartList ( cartList.filter (p => p.id!==id) ) //ver qué pasa si no pongo (p)
    }

    const totalCount = () => {
        return cartList.reduce ( (total, item) => total + item.quantity, 0);
    }

    const totalPrice = () => {
        return cartList.reduce ( (total, item) => total + item.quantity * item.price, 0);
    }
    

// *********************** Scope - Custom Provider ***********************
    return (
        <CartContext.Provider value={ {cartList, addItem, clearCart, removeItem, totalCount, totalPrice} }>
             {children} 
        </CartContext.Provider>  
    )
}
export default CartContextProvider