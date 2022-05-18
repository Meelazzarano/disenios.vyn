import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContextProvider"
import CartItem from "./CartItem"


const Cart = () => {
    const { cartList, clearCart, totalPrice } = useCartContext ()

    console.log (cartList)

  return (
    <section>

        { cartList.map ( (item) => <CartItem key={item.id} item={item} /> ) }


        { cartList.length > 0 ?
            <>
              <button className="block m-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={clearCart}>Vaciar carrito</button>
              <p className="m-10 text-xl"> Total: ${totalPrice()} </p>
            </>
          : <>
              <p className="m-10"> Aún no hay artículos en el carrito </p>
            </>
        } 
      
      <Link to='/Productos' className="inline-block m-10 text-white text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded">Volver a Productos</Link>

    </section>
  )
}
export default Cart