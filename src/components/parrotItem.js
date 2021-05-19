import React, { useState } from 'react';
import { View, Image, Text, ImageBackground } from 'react-native';
import styles from '../../styles';
import { ParrotInfoItem } from './parrotInfoItem';

const Parrot = ({ parrotId, name, location, age, gender, imgUrl, approved, navigation, userType, userId }) => {
	const onViewClicked = () => {
		navigation.navigate('Parrot Page', { parrotId: parrotId, userType: userType, userId: userId });
	};

	return (
		<View
			style={approved ? styles.approvedItemContainer : styles.itemContainer}
			onStartShouldSetResponder={() => onViewClicked()}
		>
			{!approved && (
				<View style={styles.iconImageContainer}>
					<Image style={styles.iconImage} source={{ uri: imgUrl }}></Image>
				</View>
			)}

			{approved && (
				<View style={styles.iconImageContainer}>
					<ImageBackground style={styles.iconImage} source={{ uri: imgUrl }} blurRadius={5}>
						<Image style={styles.iconImage} source={require('../images/forbidden.png')} blurRadius={3} />
					</ImageBackground>
				</View>
			)}
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
