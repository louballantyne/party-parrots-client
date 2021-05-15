import React, { useState } from 'react';
import { TextInput, Button, View, Text } from 'react-native';
import styles from '../../styles';
import { RadioButton } from 'react-native-paper';

const SignUp = ({ navigation }) => {
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [username, setUsername] = useState();
	const [email, setEmail] = useState();
	const [userType, setUserType] = useState();
	const [password, setPassword] = useState();


	const onSignUpButtonClicked = async () => {
		console.log('input fields: ', firstName, lastName, username, email, password);
		await fetch(`http://localhost:3000/api/users`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
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
		.then(data => {
			console.log(data)
			if (data.username === username) {
				navigation.navigate('Parrot List');
			}
		})
		.catch(error => {
			alert('That username already exists, please choose another');
			console.log('error: ', error);
		});
	};

	return (
		<View style={styles.inputForm}>
			<TextInput
				style={styles.inputField}
				placeholder="First Name"
				keyboardType="default"
				value={firstName}
				onChangeText={setFirstName}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.inputField}
				placeholder="Last Name"
				keyboardType="default"
				value={lastName}
				onChangeText={setLastName}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.inputField}
				placeholder="Username"
				keyboardType="default"
				value={username}
				onChangeText={setUsername}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.inputField}
				placeholder="Email"
				keyboardType="default"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
			/>
			<TextInput
				style={styles.inputField}
				placeholder="Password"
				keyboardType="default"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
				secureTextEntry={true}
			/>
			<Text>Administrator</Text>
			<RadioButton
					value = "Administrator"
					status = { userType === 'admin' ? 'checked' : 'unchecked' }
					onPress={() => setUserType('admin')}
					/>
				<Text>Standard User</Text>
				<RadioButton
					value = "Standard"
					status = { userType === 'standard' ? 'checked' : 'unchecked' }
					onPress={() => setUserType('standard')}
					/>
			<Button title="Sign Up" onPress={() => onSignUpButtonClicked()} />
		</View>
	);
};

export { SignUp };
