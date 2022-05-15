
import Card from './Card'
import { products as productList} from '../Products/Items'

const CategoryList = () => {


  return (
    <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
                {productList.map ( item => <Card key={item.category} item={item} /> )} 
            </div>
        </div>
    </section>
  )
}
export default CategoryList
