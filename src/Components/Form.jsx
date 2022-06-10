import { useFormContext } from "../Context/FormContextProvider"
import { SuccessMessageOrder } from "./SuccessMessage";



const Form = () => {

    const { buyer, validateForm, onSubmit, onInputChange, envio } = useFormContext();

return (
   
    <section className="text-gray-400 bg-gray-900 body-font relative">
    <div className="container p-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contacto</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Dejanos tus datos para poder contactarte y dar los siguientes pasos.</p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap m-2">         
            {
            Object.keys(buyer).map( key =>{
                return (     
                    <div key={key} className="p-2 w-full">
                        <div className="relative">
                            <label className="leading-7 text-sm text-gray-400">{key}</label> 
                            <input type="text" name={key} value={buyer[key]} onChange={evt => onInputChange(evt)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                    </div>
                )
                })
            }
            <div className="p-2 w-full">
                <button 
                    disabled={validateForm()}
                    onClick={evt => onSubmit(evt)}
                    className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >Enviar orden</button>
            </div>
            {   envio!==0 && <SuccessMessageOrder/>   }
        </div>
        </div>
    </div>
    </section>

  )
}
export default Form