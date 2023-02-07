import axios from 'axios';

export const saveYouthDialogue = (data) => {
    return new Promise((resolve => {
        axios.post('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/chatYouth', data)
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}

export const getRecentYouthDialogueData = () => {
    return new Promise((resolve => {
        axios.get('https://amabe-env.eba-5iepkthj.us-east-1.elasticbeanstalk.com/chatYouth')
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
