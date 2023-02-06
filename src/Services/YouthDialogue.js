import axios from 'axios';

export const saveYouthDialogue = (data) => {
    return new Promise((resolve => {
        axios.post('http://localhost:1998/chatYouth', data)
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
        axios.get('http://localhost:1998/chatYouth')
            .then(response => {
                resolve(response)
            })
            .catch((err) => {
                resolve({error: err})
            });
    }));
}
