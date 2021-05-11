import React from 'react';
import { StyleSheet, TextInput, Button, SafeAreaView, View } from 'react-native';

const SignUp = () => {
	const [firstName, setFirstName] = React.useState();
	const [lastName, setLastName] = React.useState();
	const [username, setUsername] = React.useState();
	const [email, setEmail] = React.useState();
	const [password, setPassword] = React.useState();

	return (
		<View style={styles.form}>
			<TextInput
				style={styles.input}
				placeholder="First Name"
				keyboardType="default"
				value={firstName}
				onChangeText={setFirstName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Last Name"
				keyboardType="default"
				value={lastName}
				onChangeText={setLastName}
			/>
			<TextInput
				style={styles.input}
				placeholder="Username"
				keyboardType="default"
				value={username}
				onChangeText={setUsername}
			/>
			<TextInput
				style={styles.input}
				placeholder="Email"
				keyboardType="default"
				value={email}
				onChangeText={setEmail}
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
			<Button title="Sign Up" onPress={() => console.log('Sign Up Button Pressed')} />
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

export default SignUp;
