import axios from 'axios';

export const getAllYouth = () => {
    return new Promise((resolve => {
        axios
            .get('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/youth')
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
            .get('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/youth/'+id)
            .then((response) => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
