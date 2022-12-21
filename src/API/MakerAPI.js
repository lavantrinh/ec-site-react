import { api } from './api';

const getMakerAPI = () => {
    return api("GET", "makers", null);
}

  const addNewMakerAPI = (maker) => {
    return api("POST", "makers/", maker);
  }
  const deleteMakerAPI = (id) => {
    return api("DELETE", "makers/"+id, null);
  }
    const updateMakerAPI = (id, newMaker) => {
    return api("PUT", "makers/"+id, newMaker);
  }
export { getMakerAPI, addNewMakerAPI, deleteMakerAPI, updateMakerAPI };