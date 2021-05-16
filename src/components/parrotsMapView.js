import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from '../../styles';

const ParrotsMapView = () => {
	const [parrots, setParrots] = useState([]);
	// const [pin, setPin] = useState({
	// 	latitude: 51.507322,
	// 	longitude: -0.127647,
	// });

	useEffect(() => {
		const fetchParrots = async () => {
			console.log('fetch data in use effect');
			const res = await fetch(`http://localhost:3000/api/parrots`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					setParrots(data);
					// console.log(data);
				});
		};
		fetchParrots();
	}, []);

	return (
		<View style={styles.mapViewContainer}>
			<MapView
				style={styles.mapView}
				initialRegion={{
					latitude: 51.507322,
					longitude: -0.127647,
					// latitudeDelta: 0.0922,
					// longitudeDelta: 0.0421,
				}}
			>
				{parrots.map((parrot) => (
					<Marker
						coordinate={{
							latitude: parseFloat(parrot.geocode.latitude),
							longitude: parseFloat(parrot.geocode.longitude),
						}}
					>
						<Callout>
							<Text>{parrot.name + ': ' + parrot.location}</Text>
						</Callout>
					</Marker>
				))}
			</MapView>
		</View>
	);
};

export { ParrotsMapView };
