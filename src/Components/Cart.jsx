import { useCartContext } from "../Context/CartContextProvider"
import CartItem from "./CartItem"


const Cart = () => {
    const { cartList, clearCart } = useCartContext ()

    console.log (cartList)

  return (
    <>

        { cartList.map ( (item) => <CartItem key={item.id} item={item} /> ) }


        { cartList.length > 0 ?
            <button className="block m-3 text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={clearCart}>Vaciar carrito</button>
            : <p className="m-10"> Aún no hay artículos en el carrito </p>
        } 

    </>
  )
}
export default Cart