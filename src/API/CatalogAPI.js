import { api } from './api';

const getCatalogListAPI = () => {
    return api("GET", "catalogs", null);
}

export { getCatalogListAPI };