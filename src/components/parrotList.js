import React, { useState, useEffect } from 'react';
import { View, FlatList, Button, SafeAreaView } from 'react-native';
import Parrot from './parrotItem';
import styles from '../../styles';
import { Headbar } from './headbar';
import AsyncStorage from '@react-native-community/async-storage';

const ParrotList = ({ navigation }) => {
	const [parrots, setParrots] = useState([]);
	// hard coded user type and id here

	// It doesn't know what these are if I put them in a function and then call it.
	let username = AsyncStorage.getItem("username");
	let userId = AsyncStorage.getItem("userId");
	let sessionId =AsyncStorage.getItem("sessionId");
	let userType = AsyncStorage.getItem("userId");


	useEffect(() => {
		const fetchParrots = async () => {
			console.log('fetch data in use effect');
			const res = await fetch(`http://localhost:3000/api/parrots`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					setParrots(data);
				});
		};
		fetchParrots();
	}, []);

	return (
		<View>
			<Headbar />
			<Button title="Add Parrot" onPress={() => navigation.navigate('Add Parrot')} />
			<FlatList
				data={parrots}
				renderItem={({ item }) =>
					(userType !== 'admin' || userId === item.user) && (
						<Parrot
							key={item._id}
							id={item._id}
							name={item.name}
							imgUrl={item.imageUrl ? item.imageUrl : 'https://picsum.photos/200'}
							navigation={navigation}
						/>
					)
				}
				keyExtractor={(item) => item._id}
			/>
		</View>
	);
};

export { ParrotList };
