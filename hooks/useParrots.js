import { useEffect, useState } from 'react';

const useParrots = () => {
	console.log('start use parrots...');
	const [parrots, setParrots] = useState([]);

	const fetchParrots = async () => {
		console.log('before fetch');
		const res = await fetch(`http://localhost:3000/api/parrots`, {
			method: 'GET',
		});

		const json = await res.json();
		console.log('getParrots hook: ', json);
		setParrots(json);
	};

	// useEffect(() => {
	// 	console.log('start use effect');
	// 	fetchParrots();
	// }, []);
	useEffect(() => fetchParrots(), []);

	return [parrots];
};

export default useParrots;
