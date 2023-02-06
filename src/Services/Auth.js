import axios from 'axios';

export const login = (data) => {
    return new Promise((resolve => {
        axios.post('http://localhost:1998/login', data)
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}

export const signUp = (data) => {
    return new Promise((resolve => {
        axios.post('http://localhost:1998/signup', data)
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
