import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from '../../styles';

const ParrotLocationMap = ({ geocode }) => {
	return (
		<View style={styles.locationMapContainer}>
			<MapView
				style={styles.locationMap}
				initialRegion={{
					latitude: geocode.latitude + 1.2,
					longitude: geocode.longitude - 1.3,
					latitudeDelta: 4.0922,
					longitudeDelta: 10.0421,
				}}
			>
				<Marker
					coordinate={{
						latitude: geocode.latitude,
						longitude: geocode.longitude,
					}}
				>
					<Image source={require('../images/party-parrot2.png')} style={styles.mapViewPinImage} />
					{/* <Callout>
            <Text>{parrot.name + ': ' + parrot.location}</Text>
          </Callout> */}
				</Marker>
			</MapView>
		</View>
	);
};

export { ParrotLocationMap };
