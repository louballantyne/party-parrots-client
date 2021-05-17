import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

const ApplyParrot = ({ id, route }) => {
	const { userName, userType, userId } = route.params;
	const [message, setMessage] = useState([]);

	// hardcode userId at the moment
	const onApplyButtonClicked = async () => {
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
	);
};

export { ApplyParrot };
