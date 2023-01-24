import axios from "axios";

const getItems = async () => {
  console.log(`${process.env.REACT_APP_SERVER_URL}/category`);
  return await axios.get(`${process.env.REACT_APP_SERVER_URL}/category`);
};

const ItemService = {
  getItems,
};

export default ItemService;
