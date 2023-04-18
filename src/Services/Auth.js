import axios from "axios";

export const login = (data) => {
	return new Promise((resolve) => {
		axios
			.post("https://api.amathuba-collective.live/login", data)
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				resolve({ error: err });
				console.log("err2", err);
			});
	});
};

export const signUp = (data) => {
	return new Promise((resolve) => {
		axios
			.post("https://api.amathuba-collective.live/signup", data)
			.then((response) => {
				resolve(response);
			})
			.catch((err) => {
				resolve({ error: err });
				console.log("err", err);
			});
	});
};
