import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';
import { ApplyParrot } from './applyParrot';

const ParrotPage = ({ route, navigation }) => {
	const [parrot, setParrot] = useState([]);
	const [message, setMessage] = useState([]);
	const { id } = route.params;

	useEffect(() => {
		// async function fetchParrot() {
		const fetchParrot = async () => {
			console.log('fetch data in use effect, parrot id: ', id);
			const res = await fetch(`http://localhost:3000/api/parrots/${id}`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					setParrot(data);
				});
		};
		fetchParrot();
	}, []);

	return (
		<View>
			<Text>{parrot.name}</Text>
			<Text>{parrot.charity}</Text>
			<Text>{parrot.species}</Text>
			<Text>{parrot.age}</Text>
			<Text>{parrot.location}</Text>
			<Text>{parrot.gender}</Text>
			<Text>{parrot.bio}</Text>
			<Text>{parrot.specialNeeds}</Text>
			<ApplyParrot id={id} />
		</View>
	);
};

export { ParrotPage };
