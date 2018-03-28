import axios from 'axios';

const betterbeerAPIUrl = 'https://betterbeer-api.herokuapp.com';

export const getAllBeerFeed = () => {
    const url = `${betterbeerAPIUrl}/submissions`
    return axios.get(url);
}

export const getFilteredBeerFeed = (beer) => {
    const url = `${betterbeerAPIUrl}/submissions/search?beer=${beer}`
    return axios.get(url);
}