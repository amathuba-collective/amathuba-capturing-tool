import axios from "axios";

export const saveYouthDialogue = (data) => {
  return new Promise((resolve) => {
    axios
      .post("https://api.amathuba-collective.live/chatYouth", data)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        resolve({ error: err });
      });
  });
};

export const getRecentYouthDialogueData = () => {
  return new Promise((resolve) => {
    axios
      .get("https://api.amathuba-collective.live/chatYouth",)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        resolve({ error: err });
      });
  });
};
