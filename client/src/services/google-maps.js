import axios from "axios";

export const getSearchResults = (input) => {
  const url = `/autocomplete/${input}`;
  return axios.get(url)
    .then(response => {
        return response.data.predictions;
    })
};

// export const getLocation = (zip) => {
//     const url = `/geocode/${zip}`
//     return axios.get(url)
//         .then(response => {
//             console.log(response);
//              return response.data.results[0].geometry.location;
//         })
// }