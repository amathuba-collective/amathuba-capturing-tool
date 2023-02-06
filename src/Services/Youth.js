import axios from 'axios';

export const getAllYouth = () => {
    return new Promise((resolve => {
        axios
            .get('http://localhost:1998/youth')
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}

export const getYouthById = (id) => {
    return new Promise((resolve => {
        axios
            .get('http://localhost:1998/youth/'+id)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
