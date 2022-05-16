import ItemList from "../Components/ItemList"
import { useEffect, useState } from 'react'
import { getProducts } from "../Products/getProducts";
import { products as productList} from '../Products/Items'
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const { categoryID } = useParams ()  
  const [products, setProducts] = useState( )
    
  useEffect(() => {

      getProducts(productList).then ( (result)=> {
        setProducts (
          categoryID ? 
              result.filter ( p => p.category === categoryID) 
              : result)
      }).catch ( (err) => {
          console.log ('Hubo un error en la promesa',err);
      })
      
  }, [categoryID] )
  

  return (
    <>
    { products?
        <ItemList products={products}/>
        : <p> Cargando productos... </p>
    }
    </>
  )
}
export default ItemListContainer