import { useCartContext } from "../Context/CartContextProvider"

const CartItem = ( {item} ) => {

    const { removeItem }= useCartContext();

return (
    <>
        <div className="flex md:w-100% p-4 m-4">                   
            <img alt="ecommerce" className="w-1/4 mx-5 object-cover object-center relative h-48 block" src={item.pictureURL} />
            <div className="mr-5">
                <h1 className="m-2 text-white title-font font-medium">Producto: {item.title}</h1>
                <h2 className="m-2"> Cantidad: {item.quantity}</h2>
                <button className="my-4 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded" onClick={() => removeItem (item.id)}> Eliminar artículo </button>
            </div>
            
        </div>
    </> )
}
export default CartItem 