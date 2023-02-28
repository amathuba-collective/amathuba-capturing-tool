import axios from "axios";

export const getAllYouth = () => {
  return new Promise((resolve) => {
    axios
      .get("https://api.amathuba-collective.live/youth")
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        resolve({ error: err });
      });
  });
};

export const getYouthById = (id) => {
  return new Promise((resolve) => {
    axios
      .get("https://api.amathuba-collective.live/youth/" + id)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        resolve({ error: err });
      });
  });
};
