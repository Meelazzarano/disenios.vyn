import { products as productList} from './Items'

export const getProducts = () => {
    return new Promise ( (resolve, reject)=> {            
        setTimeout (() => resolve(productList), 2000);
    });
};