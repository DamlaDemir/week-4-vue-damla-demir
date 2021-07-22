import axios from "axios";
const BASE_URL = "https://swapi.dev/api/starships/";

export const getAllStarships = async (queryParams = {}) => {
  let response = await axios.get(`${BASE_URL}`, { params: queryParams });

  if (response.status === 200) {
    return response.data;
  } else {
    alert("Error on get starships list!");
  }
};

export const getStarship = async (id) => {
  let response = await axios.get(`${BASE_URL}${id}`);

  if (response.status === 200) {
    return response.data;
  } else {
    alert("Error on get starship detail!");
  }
};
