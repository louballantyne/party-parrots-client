import React, { useState } from 'react';
import { View, Text } from 'react-native';

const Parrot = ({ id, name }) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};

export default Parrot;
