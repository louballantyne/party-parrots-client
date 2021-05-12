import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles';

const Parrot = ({ id, name, imgUrl }) => {
	return (
		<View style={styles.itemContainer}>
			<Image style={styles.itemImage} source={{ uri: imgUrl }}></Image>
			<Text>{name}</Text>
		</View>
	);
};

export default Parrot;
