import axios from "axios";

export const getSearchResults = (input, lat, long) => {
  const url = `/autocomplete/${input}/${lat},${long}`;
  return axios.get(url)
    .then(response => {
        console.log(response);
    })
};

export const getLocation = (zip) => {
    const url = `/geocode/${zip}`
    return axios.get(url)
        .then(response => {
            console.log(response);
             return response.data.results[0].geometry.location;
        })
}