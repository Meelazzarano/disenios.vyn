import { Link } from 'react-router-dom'
import ItemCounter from './ItemCounter'
import { useCartContext } from '../Context/CartContextProvider'
import { useState } from 'react';
import { SuccessMessage } from './SuccessMessage';


const ItemDetail = ( {producto} ) => {

    const { addItem } = useCartContext();
    const [ cartQuantity, setCartQuantity] = useState (0);

    const handleOnAdd = (count) => {
        setCartQuantity (count);
        addItem(producto, count);
    }

  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        {   cartQuantity!==0 && <SuccessMessage/>   }
        <div className="container px-5 py-10 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-300px object-cover object-center rounded" src={producto.pictureURL}></img>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-white text-3xl title-font font-medium mb-1">{producto.title}</h1>
                    <p className="leading-relaxed mb-6 text-justify">{producto.descrip}</p>
                    <div className="mb-6 p-4 title-font font-medium text-2xl text-white'">${producto.price}</div>
                    <div className="block">
                        {   cartQuantity ===0 ?
                            <ItemCounter onAdd={handleOnAdd}/>
                            : <Link to='/Cart' className="inline-block m-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded">Terminar la compra</Link>
                        }
                        <Link to='/Productos' className="inline-block mx-3 my-10 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">Volver a Productos</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default ItemDetail