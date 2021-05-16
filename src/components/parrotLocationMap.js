import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from '../../styles';

const ParrotLocationMap = ({ location }) => {
	const [geocode, setGeocode] = useState({
		latitude: 51.507322,
		longitude: -0.127647,
	});

	useEffect(() => {
		console.log('passed location: ', location);
		if (location !== undefined) getLocationGeocode(location);
	}, []);

	const getLocationGeocode = (location) => {
		const key = 'HUciaAuNhN0cGxvKRp5puDxzvYAHrkR5';
		const geoCoderUrlPrefix = `http://open.mapquestapi.com/geocoding/v1/address?key=${key}&location=`;
		location = location.replace(/\s/g, '') + ',GB';
		const url = geoCoderUrlPrefix + location;
		fetchGeocode(url);
	};

	const fetchGeocode = async (url) => {
		console.log('url: ', url);
		const res = await fetch(url, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				setGeocode({
					latitude: data.results[0].locations[0].latLng.lat,
					longitude: data.results[0].locations[0].latLng.lng,
				});
			});
	};

	return (
		<View style={styles.locationMapContainer}>
			<MapView
				style={styles.locationMap}
				initialRegion={{
					latitude: geocode.latitude,
					longitude: geocode.longitude,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				<Marker
					coordinate={{
						latitude: geocode.latitude,
						longitude: geocode.longitude,
					}}
				>
					{/* <Callout>
            <Text>{parrot.name + ': ' + parrot.location}</Text>
          </Callout> */}
				</Marker>
			</MapView>
		</View>
	);
};

export { ParrotLocationMap };
