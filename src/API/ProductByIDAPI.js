import { api } from './api';

const getProductByIDAPI = (id) => {
    return api("GET", "products/"+id, null);
}

const getProductImageByProductID = (id) => {
    return api("GET", "product_images/" + id, null);
}



export { getProductByIDAPI, getProductImageByProductID };