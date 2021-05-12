// NOT IN USE ANYMORE

import { useEffect, useState } from 'react';

const useParrots = () => {
	console.log('start use parrots...');
	const [parrots, setParrots] = useState([]);

	// const fetchParrots = async () => {
	// 	console.log('before fetch');
	// 	const res = await fetch(`http://localhost:3000/api/parrots`, {
	// 		method: 'GET',
	// 	}).then((response) => console.log('response: ', response.json()));

	// 	// const json = await res.json();
	// 	// console.log('getParrots hook: ', json);
	// 	// setParrots(json);
	// };

	// useEffect(() => {
	// 	console.log('start use effect');
	// 	fetchParrots();
	// }, []);
	useEffect(() => {
		async function fetchParrots() {
			console.log('fetch data in use effect');
			const res = await fetch(`http://localhost:3000/api/parrots`, {
				method: 'GET',
				// mode: 'cors',
				// credentials: 'include',
			})
				.then((response) => response.json())
				.then((data) => setParrots(data));
		}
	}, []);

	return [parrots];
};

export default useParrots;
