import ItemList from "../Components/ItemList"
import { useEffect, useState } from 'react'
import { getProducts } from "../Products/getProducts";
import { products as productList} from '../Products/Items'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {



  const [products, setProducts] = useState( {} )
    
  useEffect(() => {

      getProducts(productList).then ( (result)=> {
          // console.log(result)
      }).catch ( (err) => {
          console.log ('Hubo un error en la promesa',err);
      })
  }, [products])
  

//   const { categoryID } = useParams ()  
//   const [producto, setProducto] = useState ( {} )

//   useEffect( () => {

//     (async () => {
//         const itemDescrip = await getProductDetail()
//         setProducto(itemDescrip)
//     })()

// }, [])

// const getProductDetail = () => {
//     return new Promise ( (resolve) => {
//         setTimeout ( () => {
//             resolve (products.filter (p => p.category === categoryID))
//         }, 2000);
//     })
// }

  return (
    <>
    <ItemList/>
    </>
  )
}
export default ItemListContainer