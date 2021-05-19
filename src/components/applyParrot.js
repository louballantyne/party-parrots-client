import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../../styles';

const ApplyParrot = ({ parrotId, userId }) => {
	const [message, setMessage] = useState();
	const [applied, setApplied] = useState(false);

	// hardcode userId at the moment
	const onApplyButtonClicked = async () => {
		await fetch(`http://localhost:3000/api/parrots/${parrotId}/applications`, {
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
			.then((data) => {
				console.log(data);
				if (data._id) setApplied(true);
			})
			.catch((error) => console.log('error: ', error));
	};

	return (
		<View style={{alignSelf: "center"}}>
			{!applied && (
				<View style={styles.applyInputForm}>
					<TextInput
						style={styles.applyInputField}
						placeholder="Message"
						keyboardType="default"
						value={message}
						onChangeText={setMessage}
						autoCapitalize="none"
					/>
					<View style={styles.buttonContainer} onStartShouldSetResponder={() => onApplyButtonClicked()}>
						<Text style={styles.buttonText}>APPLY</Text>
					</View>
				</View>
			)}
			{applied && <Text style={styles.redBoldFont}>Applied!</Text>}
		</View>
	);
};

export { ApplyParrot };
