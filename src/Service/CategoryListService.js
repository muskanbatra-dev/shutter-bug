import axios from "axios";

// getCategoriesList

const getCategoriesList = async () => {
  return axios.get("/api/categories");
};

export default {
  getCategoriesList,
};
