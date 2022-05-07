import ItemList from "../Components/ItemList"
import { useEffect, useState } from 'react'
import { getProducts } from "../Products/getProducts";


const ItemListContainer = () => {

  const [products, setProducts] = useState([])
    
  useEffect(() => {

      getProducts().then ( (result)=> {
          console.log(result)
      }).catch ( (err) => {
          console.log ('Hubo un error en la promesa',err);
      })
  }, [products])
  
  return (
    <>
    <ItemList/>
    </>
  )
}
export default ItemListContainer