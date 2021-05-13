import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const ParrotPage = ({ navigation, id }) => {
	const [parrot, setParrot] = useState([]);

	useEffect(async () => {
		console.log('fetch data in use effect');
		const res = await fetch(`http://localhost:3000/api/parrots/${id}`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				setParrot(data);
			});
	}, []);

	const onApplyButtonClicked = async () => {
		console.log('input fields: ', message);
		await fetch(`http://localhost:3000/api/parrots/${id}/applications`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				userId: userId,
				message: message,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log('error: ', error));
	};

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
			<View style={styles.inputForm}>
				<TextInput
					style={styles.inputField}
					placeholder="Message"
					keyboardType="default"
					value={message}
					onChangeText={setMessage}
					autoCapitalize="none"
				/>
				<Button title="Apply" onPress={() => onApplyButtonClicked()} />
			</View>
		</View>
	);
};

export { ParrotPage };
