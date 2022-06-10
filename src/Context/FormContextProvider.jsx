import { addDoc, collection, getFirestore } from "firebase/firestore";
import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContextProvider";




// ********************** Declaración del contecxto **********************
export const FormContext = createContext({});


// ******************** Función para usar el contexto ********************
export const useFormContext = () => useContext(FormContext)  



// ******************* Función para scope del contexto *******************
const FormContextProvider = ( {children} ) => {
 
    const [buyer, setBuyer] = useState({
        Nombre: "",
        Email: "",
        Teléfono: ""
      });

    const [envio, setEnvio] = useState(0);

    const { cartList, totalPrice, clearCart } = useCartContext();

    function onInputChange(event){
        const target = event.target;
        const value = target.value;
        const nameInp = target.name;
    
        setBuyer({
            ...buyer,
            [nameInp]: value
        })
    }

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

    function onSubmit() {
        saveOrderHandler();
        setEnvio(1);
        setBuyer ({ Nombre:"", Email:"", Teléfono:""})
        clearCart();
    }
    

    function validateForm(){  
        let formIsComplete = Object.keys(buyer) 
        .find( (field) => buyer[field] === "")   
        return formIsComplete
    }


// *********************** Scope - Custom Provider ***********************
    return (
        <FormContext.Provider value={ {buyer, onInputChange, onSubmit, validateForm, envio} }>
             {children} 
        </FormContext.Provider>  
    )
}
export default FormContextProvider