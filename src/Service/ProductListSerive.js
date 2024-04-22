import axios from "axios";

// getProductsList

const getProductsList = async () => {
  return axios.get("/api/products");
};

export default {
  getProductsList,
};
