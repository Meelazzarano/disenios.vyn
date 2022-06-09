import { createContext, useContext, useState } from "react";
import { useCartContext } from "./CartContextProvider";
import { useOrderContext } from "./OrderContextProvider";



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

    const { cartList } = useCartContext();
    const { saveOrderHandler } = useOrderContext();

    function onInputChange(event){
        const target = event.target;
        const value = target.value;
        const nameInp = target.name;
    
        setBuyer({
            ...buyer,
            [nameInp]: value
        })
    }

    function onSubmit() {
        saveOrderHandler();
        console.log("Finalizada la compra",buyer, cartList);
    }
    
// ********** PROBLEMAS ******************
// No llega nada a Firestore
// Buyer undefined
// No me toma el total de la cotización
// Renderiza mil veces el form al completar los campos
// Warning de useEffect. Qué paso??????




    function validateForm(){  
        let formIsComplete = Object.keys(buyer) 
        .find( (field) => buyer[field] === "")   
        return formIsComplete
    }


// *********************** Scope - Custom Provider ***********************
    return (
        <FormContext.Provider value={ {buyer, onInputChange, onSubmit, validateForm} }>
             {children} 
        </FormContext.Provider>  
    )
}
export default FormContextProvider