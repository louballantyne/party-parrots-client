import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Parrot from './parrotItem';
import styles from '../../styles';

const ParrotList = ({ navigation }) => {
	const [parrots, setParrots] = useState([]);

	useEffect(async () => {
		console.log('fetch data in use effect');
		const res = await fetch(`http://localhost:3000/api/parrots`, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				setParrots(data);
			});
	}, []);

	return (
		<View>
			<FlatList
				data={parrots}
				renderItem={({ item }) => (
					<Parrot
						key={item._id}
						name={item.name}
						imgUrl={item.imageUrl ? item.imageUrl : 'https://picsum.photos/200'}
						navigation={navigation}
					/>
				)}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};

export { ParrotList };
