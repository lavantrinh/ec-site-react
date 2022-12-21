import { api } from './api';

const getProductListAPI = () => {
    return api("GET", "products", null);
}
  const addNewProductAPI = (product) => {
    return api("POST", "products/", product);
  }
  const addNewProductImageAPI = (productImage) => {
    return api("POST", "product_images/", productImage);
  }

export { getProductListAPI, addNewProductAPI, addNewProductImageAPI};