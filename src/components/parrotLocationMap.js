import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from '../../styles';

const ParrotLocationMap = ({ geocode }) => {
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
