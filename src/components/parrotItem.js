import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../../styles';
import { ParrotInfoItem } from './parrotInfoItem';

const Parrot = ({ id, name, location, age, gender, imgUrl, navigation }) => {
	const onViewClicked = () => {
		navigation.navigate('Parrot Page', { id: id });
	};

	return (
		<View style={styles.itemContainer} onStartShouldSetResponder={() => onViewClicked()}>
			<View style={styles.iconImageContainer}>
				<Image style={styles.iconImage} source={{ uri: imgUrl }}></Image>
			</View>
			<View style={styles.itemInfoContainer}>
				<ParrotInfoItem label="Name: " info={name} />
				<ParrotInfoItem label="Age: " info={age} />
				<ParrotInfoItem label="Gender: " info={gender} />
				<ParrotInfoItem label="Location: " info={location} />
			</View>
		</View>
	);
};

export default Parrot;
