import axios from "axios";

export const getSearchResults = (input, lat, long) => {
  const url = `/autocomplete/${input}/${lat},${long}`;
  return axios.get(url)
    .then(response => {
        console.log(response);
    })
};
