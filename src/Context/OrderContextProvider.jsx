import { addDoc, collection, getFirestore } from "firebase/firestore"
import { createContext, useContext } from "react";
import { useCartContext } from "../Context/CartContextProvider";
import { useFormContext } from "../Context/FormContextProvider";


// ********************** Declaración del contecxto **********************
export const OrderContext = createContext({});


// ******************** Función para usar el contexto ********************
// Es más prolijo. Te ahorras el import del useContext y del cartContext. Se importa solo el hook.
export const useOrderContext = () => useContext (OrderContext)



// ******************* Función para scope del contexto *******************
const OrderContextProvider = ( {children} ) => {

    const { cartList, totalPrice }= useCartContext();
    const { buyer } = useFormContext();

    const saveOrderHandler = () => {    
        const order = {
            buyer: buyer,
            cart: cartList,
            total: totalPrice()
        }
        saveOrderFirestore (order)
    }

    const saveOrderFirestore = (order) => {
        const orderCollection = collection (getFirestore(), 'Ordenes')
        addDoc (orderCollection, order).then ()      
    }
  
    
    return (
    <OrderContext.Provider value={ {saveOrderHandler} }>
        {children}
    </OrderContext.Provider>
    )
}
export default OrderContextProvider