export const setLocalStorageForObjects = (itemName, value) => {
    const stringVal = JSON.stringify(value);
    localStorage.setItem(itemName, stringVal);
}

export const getLocalStorageForObjects = (itemName) => {
    const dataAsString = localStorage.getItem(itemName);
    const obj = JSON.parse(dataAsString);

    return obj;
}


export const setLocalStorageAsString = (itemName, value) => {
    localStorage.setItem(itemName, value);
}

export const getLocalStorageAsString = (itemName) => {
    return localStorage.getItem(itemName);
}
