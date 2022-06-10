import ItemDetail from "./ItemDetail"
import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    
  const { id } = useParams ()
  const [producto, setProducto] = useState ( )

    useEffect( () => {
        getDBProduct()
    }, [id])

    const getDBProduct = () => {
        const db = getFirestore()

        getDoc(doc (db, "Items", id)).then((snapshot)=> {
            if (snapshot!==0) {
                setProducto ( {id, ...snapshot.data()} )
            }
        })
    
    }

    return (
        <>
        { producto ?
            <ItemDetail producto={producto} />
            : <p> Cargando detalle... </p>
        }
        </>
    )
}

export default ItemDetailContainer

