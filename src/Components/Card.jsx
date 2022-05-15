import { Link } from "react-router-dom"

const Card = ({item}) => {
  return (
    <>
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a href="/#" className="block relative h-48 rounded overflow-hidden">                        
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.pictureURL} />
            </a>
            <div className="mt-4">
                <h2 className="text-white title-font text-lg font-medium">{item.title}</h2>
            </div>
            <Link to={`/Productos/${item.title}`} className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded text-lg">Ver detalles</Link>
        </div>
    </>
  )
}
export default Card