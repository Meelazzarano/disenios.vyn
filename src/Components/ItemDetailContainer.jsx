import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { products as productList} from '../Products/Items'

const ItemDetailContainer = () => {
    
  const { productoID } = useParams ()
  const [producto, setProducto] = useState ( {} )

    useEffect( () => {

        (async () => {
            const itemDescrip = await getProductDetail()
            console.log (itemDescrip)
            setProducto(itemDescrip)
        })()
    
    }, [])

    const getProductDetail = () => {
        return new Promise ( (resolve) => {
            setTimeout ( () => {
                resolve (productList.find (p => p.id == productoID))
            }, 2000);
        })
    }

    return (
        <>
        {/* <div>{producto.title}</div> */}
        <ItemDetail producto={producto} />
        </>
    )
}

export default ItemDetailContainer

