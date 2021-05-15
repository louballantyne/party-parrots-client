import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';

const ParrotApplication = ({
	parrotId,
	applicationId,
	applicant,
	message,
	approved,
	showApprove,
	onApproveSubmitted,
	navigation,
}) => {
	const [newApproved, setNewApproved] = useState(approved);
	console.log('values passed in: ', message, approved, showApprove, onApproveSubmitted);
	const onApproveButtonClicked = async () => {
		const response = await fetch(`http://localhost:3000/api/parrots/${parrotId}/applications/${applicationId}`, {
			method: 'PATCH',
		});

		if (response.status === 200) {
			Alert.alert('Application approved successfully');
			setNewApproved(true);
			// navigation.navigate('Parrot Page');
		} else if (response.status === 400) {
			Alert.alert('Parrot application already approved');
		} else {
			Alert.alert('Unsuccessful approval');
		}
		onApproveSubmitted();
	};

	return (
		<View>
			<Text>{applicant}</Text>
			<Text>{message}</Text>
			<Text>{newApproved ? 'Approved' : showApprove ? '' : 'Declined'}</Text>
			{showApprove && <Button title="Approve" onPress={() => onApproveButtonClicked()} />}
		</View>
	);
};

export { ParrotApplication };
