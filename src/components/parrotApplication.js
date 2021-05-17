import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';

const ParrotApplication = ({ applicant, message, route }) => {
	const { userName, userType, userId } = route.params;
	const onApproveButtonClicked = () => {
		Alert.alert('approved');
	};

	return (
		<View>
			<Text>{applicant}</Text>
			<Text>{message}</Text>
			<Button title="Approve" onPress={() => onApproveButtonClicked()} />
		</View>
	);
};

export { ParrotApplication };
