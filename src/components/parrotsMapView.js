import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from '../../styles';
import Parrot from './parrotItem';

const ParrotsMapView = ({ navigation }) => {
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
					latitude: 52.5862,
					longitude: -1.5004,
					latitudeDelta: 2.0922,
					longitudeDelta: 7.0421,
				}}
			>
				{parrots.map((parrot) => (
					<Marker
						key={parrot._id}
						coordinate={{
							latitude: parseFloat(parrot.geocode.latitude),
							longitude: parseFloat(parrot.geocode.longitude),
						}}
					>
						<Callout>
							{/* <Text>{parrot.name + ': ' + parrot.location}</Text> */}
							<Parrot
								key={parrot._id}
								id={parrot._id}
								name={parrot.name}
								location={parrot.location}
								age={parrot.age}
								gender={parrot.gender}
								imgUrl={
									parrot.imageUrl
										? parrot.imageUrl
										: 'https://party-parrots-s3-bucket.s3.amazonaws.com/parrot.jpeg'
								}
								navigation={navigation}
							/>
						</Callout>
					</Marker>
				))}
			</MapView>
		</View>
	);
};

export { ParrotsMapView };
