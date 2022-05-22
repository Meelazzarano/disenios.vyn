import ItemList from "../Components/ItemList"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemListContainer = () => {

  const { categoryID } = useParams ()  
  const [products, setProducts] = useState( )
    
  useEffect(() => {
    getDBItems()      
  }, [categoryID] )
  
  const getDBItems = () => {
    const db = getFirestore()

    const q = query ( collection (db, 'Items'), where ('stock','>', 0))

    getDocs (q).then ((snapshot) => {
      if (snapshot!==0) {
        const result = snapshot.docs.map ( i => ( {'id': i.id, ...i.data()}) )

        setProducts (
          categoryID ?
            result.filter (p => p.category === categoryID)
            : result
        )
      }
    })
  }


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