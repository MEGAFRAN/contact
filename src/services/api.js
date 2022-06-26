import axios from 'axios';

export const get = async(API) => {
    return await axios
        .get(API)
        .then(responsive => responsive)
        .catch(error => error)

}