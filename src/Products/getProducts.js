
export const getProducts = (x) => {
    return new Promise ( (resolve)=> {            
        setTimeout (() => resolve(x), 2000);
    });
};