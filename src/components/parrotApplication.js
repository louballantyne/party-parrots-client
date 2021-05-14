import React from 'react';
import { View, Text, Button } from 'react-native';
import styles from '../../styles';

const ParrotApplication = ({ applicant, message }) => {
	const onApproveButtonClicked = () => {
		console.log('approved');
	};

	return (
		<View style={styles.itemContainer}>
			<Text>{applicant}</Text>
			<Text>{message}</Text>
			<Button title="Approve" onPress={() => onApproveButtonClicked()} />
		</View>
	);
};

export default ParrotApplication;
