import React, { useState } from 'react';
import { TextInput, Button, View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import styles from '../../styles';
import { useNavigation } from '@react-navigation/core';

// might have to change this to just props and use navation const in function. WE SHALL SEE.
const SignIn = (props) => {
	const navigation = useNavigation();

	const [userName, setUserName] = useState('');
	const [passWord, setPassWord] = useState('');

	const onSignInButtonClicked = () => {
		fetch('http://localhost:3000/api/sessions', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ username: userName, password: passWord }),
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.sessionId) {
					props.navigation.navigate('Parrot List', {
						userType: data.userType,
						userId: data.userId,
						sessionId: data.sessionId,
					});
					// a log in session function called here?
				} else {
					Alert.alert(data.message);
				}
			})
			.catch((error) => console.error(error));
	};

	const keyPressed = (event) => {
		if (event.key === 'Enter') {
			onSignInButtonClicked();
		}
	};

	return (
		<View style={styles.formBody}>
			<View style={styles.circleImageContainer}>
				<Image source={require('../images/gify-parrot.gif')} style={styles.circleImage} />
			</View>

			{/* <Headbar {...props}/> */}
			<View style={styles.inputForm}>
				<TextInput
					style={styles.inputField}
					autoCapitalize="none"
					placeholder="username"
					type="text"
					onChangeText={(text) => setUserName(text)}
					value={userName}
				/>
				<TextInput
					style={styles.inputField}
					autoCapitalize="none"
					secureTextEntry={true}
					placeholder="password"
					onChangeText={(text) => setPassWord(text)}
					onKeyPress={(key) => keyPressed(key)}
					value={passWord}
				/>
				<View style={styles.buttonContainer} onStartShouldSetResponder={() => onSignInButtonClicked()}>
					<Text style={styles.buttonText}>SIGN IN</Text>
				</View>
				<View style={styles.buttonContainer} onStartShouldSetResponder={() => navigation.navigate('Sign Up')}>
					<Text style={styles.buttonText}>CREATE AN ACCOUNT!</Text>
				</View>
			</View>
		</View>
	);
};

export { SignIn };
