import { Link } from 'react-router-dom'


const ItemDetail = ( {producto} ) => {

  return (
    <>
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded" src={producto.pictureURL}></img>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h1 className="text-white text-3xl title-font font-medium mb-1">{producto.title}</h1>
                    <p className="leading-relaxed mb-10">{producto.descrip}</p>
                    <div className="flex">
                        <span className="title-font font-medium text-2xl text-white'">${producto.price}</span>
                        <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded"><Link to='/Productos'>Volver a Productos</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
export default ItemDetail