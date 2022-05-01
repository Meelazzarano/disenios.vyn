import { useEffect, useState } from 'react'
import { products as productList} from '../Products/Items'
import Card from './Card'

const ItemList = () => {

    const [products, setProducts] = useState([])
    
    useEffect(() => {

        const getProducts = new Promise ( (resolve, reject)=> {            
            setTimeout ( ()=>{
                resolve(productList)   
            }, 2000)
        })

        getProducts.then ( (result)=> {
            console.log(result)
        }).catch ( (err) => {
            console.log ('Hubo un error en la promesa',err);
        })
    }, [products])
    

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4">
                {productList.map ( item => <Card item={item} /> )} 
            </div>
        </div>
    </section>
  )
}
export default ItemList

