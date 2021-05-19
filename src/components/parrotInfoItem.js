import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const ParrotInfoItem = ({ label, info }) => {
	return (
		<View style={styles.infoItem}>
			<Text style={styles.infoLabel}>{label}</Text>
			<Text style={styles.infoText}>{info}</Text>
		</View>
	);
};

export { ParrotInfoItem };
