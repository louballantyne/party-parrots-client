import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles';

const Parrot = ({ id, name, imgUrl, navigation }) => {
	const onViewClicked = () => {
		navigation.navigate('Parrot Page', { id: id });
	};

	return (
		<View style={styles.itemContainer} onStartShouldSetResponder={() => onViewClicked()}>
			<View style={styles.iconImageContainer}>
				<Image style={styles.iconImage} source={{ uri: imgUrl }}></Image>
			</View>
			<Text>{name}</Text>
		</View>
	);
};

export default Parrot;
