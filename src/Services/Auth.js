import axios from 'axios';

export const login = (data) => {
    return new Promise((resolve => {
        axios.post('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/login', data)
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
        axios.post('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/signup', data)
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
