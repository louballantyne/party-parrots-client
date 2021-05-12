import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Parrot from './parrot';

const ParrotList = () => {
	const [parrots, setParrots] = useState([]);

	useEffect(() => {
		console.log('fetch data in use effect');
		const res = fetch(`http://localhost:3000/api/parrots`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				// console.log('inside response: ', data);
				setParrots(data);
			});
	}, []);

	return (
		<View>
			{parrots.map((parrot) => (
				<Parrot key={parrot._id} name={parrot.name} />
			))}
		</View>
	);
};

export { ParrotList };
