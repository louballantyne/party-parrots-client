import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../../styles';

const Parrot = ({ id, name }) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};

export default Parrot;
