import { useCartContext } from "../Context/CartContextProvider"

const CartItem = ( {item} ) => {

    const { removeItem }= useCartContext();

return (
    <>
        <div className="md:flex md:w-100% p-4 m-4">                   
            <img alt="ecommerce" className="w-60 mx-4 object- center object-cover h-48  block" src={item.pictureURL} />
            <div className="mx-4">
                <h1 className="text-white title-font font-medium"> {item.title}</h1>
                <p className="mx-2"> Cantidad: {item.quantity} </p>
                <p className="mx-2"> Precio unitario: $ {item.price}</p>
                <p className="mx-2"> Subtotal: $ {item.quantity * item.price}</p>
                <button className="my-4 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded" onClick={() => removeItem (item.id)}> Eliminar artículo </button>
            </div>
            
        </div>
    </> )
}
export default CartItem 