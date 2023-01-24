import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// console.log("useEffect ran");
		// const abortCont = new AbortController();
		fetch(url)
			.then((res) => {
				if (!res.ok) {
					throw Error("cant fetch youth data");
				}
				return res.json();
			})
			.then((data) => {
				setData(data);
				setLoading(false);
				setError(null);
			})
			.catch((err) => {
				setLoading(false);
				setError(err.message);
			});

		// return () => abortCont.abort();
	}, [url]); // useEffect will only run the function if it is in the dependency array

	return { data, loading, error };
};

export default useFetch;
