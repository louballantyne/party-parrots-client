import React, { useState } from 'react';
import { View, Text } from 'react-native';
import useParrots from '../hooks/useParrots';
import Parrot from './parrot';

// import { useNavigation } from '@react-navigation/core';

const ParrotList = () => {
	const [parrots] = useParrots();
	console.log('after get parrots: ', parrots);

	return (
		<View>
			{parrots.map((parrot) => (
				<Parrot key={parrot.id} name={parrot.name} />
			))}
		</View>
	);
};

export { ParrotList };
