import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { products as productList} from '../Products/Items'

const ItemDetailContainer = () => {
    
  const { productoTitle } = useParams ()
  const [producto, setProducto] = useState ( {} )

    useEffect( () => {

        (async () => {
            const itemDescrip = await getProductDetail()
            setProducto(itemDescrip)
        })()
    
    }, )

    const getProductDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout ( () => {
                resolve (productList.find (p => p.title === productoTitle))
            }, 2000);
        })
    }

    return (
        <>
        <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer

