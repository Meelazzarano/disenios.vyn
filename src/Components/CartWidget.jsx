import { Link } from "react-router-dom"
import { useCartContext } from "../Context/CartContextProvider"

const CartWidget = () => {

  const {totalCount} = useCartContext ();

  return (
    <>
        <Link to='/Cart' className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base my-2 md:mt-0">Mi Carrito 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 m-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <i className=" fa-solid fa-cart-shopping"></i>
          <p className="carritoCount">{totalCount()}</p>
        </Link>
    </>
  )
}
export default CartWidget