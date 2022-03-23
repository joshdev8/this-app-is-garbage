import { useState, useEffect } from 'react';
import axios from 'axios';

const useLoadItems = ({ term }) => {
	const [error, setError] = useState(false);
	const [items, setItems] = useState(null);
	const [loading, setLoading] = useState(false);
	const constructedApiUrl = `https://www.omdbapi.com/?s=${term}&apikey=fe9153b&`;

	useEffect(() => {
		setLoading(true);
		axios
			.get(constructedApiUrl)
			.then(({ data }) => {
				const { Search: results } = data;
				if (results) {
					setItems(results);
				}
			})
			.catch(err => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [constructedApiUrl]);

	return [items, loading, error];
};

export default useLoadItems;
