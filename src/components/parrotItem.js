import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles';

const Parrot = ({ id, name, imgUrl, navigation }) => {
	const onViewClicked = () => {
		navigation.navigate('Parrot Page', { id: id });
	};

	return (
		<View style={styles.itemContainer} onStartShouldSetResponder={() => onViewClicked()}>
			<Image style={styles.itemImage} source={{ uri: imgUrl }}></Image>
			<Text>{name}</Text>
		</View>
	);
};

export default Parrot;
