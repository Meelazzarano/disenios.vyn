
export const getProducts = (x) => {
    return new Promise ( (resolve)=> {            
        setTimeout (() => resolve(x), 1000);
    });
};