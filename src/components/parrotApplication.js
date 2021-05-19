import React, { useState } from 'react';
import { View, Text, Button, Alert } from 'react-native';
import styles from '../../styles';
import { ParrotInfoItem } from './parrotInfoItem';

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
		<View style={styles.applicationContainer}>
			<View style={styles.applicationContent}>
				<ParrotInfoItem label={applicant + ': '} info={message} />
				<ParrotInfoItem label="Status: " info={newApproved ? 'Approved' : showApprove ? 'NA' : 'Declined'} />
			</View>
			<View style={styles.approveButton}>
				{showApprove && (
					<View
						style={styles.smallButtonContainer}
						onStartShouldSetResponder={() => onApproveButtonClicked()}
					>
						<Text style={styles.smallButtonText}>APPROVE</Text>
					</View>
				)}
			</View>
		</View>
	);
};

export { ParrotApplication };
