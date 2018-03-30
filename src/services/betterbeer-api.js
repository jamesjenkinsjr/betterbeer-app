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

export const pushNewBeer = (entry) => {
    const url = `${betterbeerAPIUrl}/submissions`
    axios.post(url, {
        name: entry.name,
        price: entry.price,
        purchaseType: entry.purchaseType,
        latitude: entry.lattitude,
        longitude: entry.longitude
    })
}