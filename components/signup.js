import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

const SignUp = ( { navigation }) => {

	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	const onSignUpButtonClicked = () => {
		console.log('input fields: ', firstName, lastName, username, email, password);
		fetch(`http://localhost:3000/api/users`, {
			method: 'POST',
			mode: 'cors',
			credentials: 'include',
			headers: {
				'content-type': 'application/json',
			},
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({
				forename: firstName,
				lastname: lastName,
				username: username,
				email: email,
				password: password,
				type: 'admin',
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log('error: ', error));
			navigation.navigate('Parrot List')
	};

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="First Name"
				keyboardType="default"
				value={firstName}
				onChangeText={setFirstName}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Last Name"
				keyboardType="default"
				value={lastName}
				onChangeText={setLastName}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Username"
				keyboardType="default"
				value={username}
				onChangeText={setUsername}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				keyboardType="default"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.input}
				placeholder="Password"
				keyboardType="default"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				secureTextEntry={true}
			/>
			<Button title="Sign Up" onPress={() => onSignUpButtonClicked()} />
		</View>
	);
};

const styles = StyleSheet.create({
	form: {
		margin: 20,
		backgroundColor: 'pink',
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
	},
});

export { SignUp };
