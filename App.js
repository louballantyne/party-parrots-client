// import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { useEffect } from 'react';
import { ParrotList } from './src/components/parrotList';
import { SignUp } from './src/components/signup';

const Stack = createStackNavigator();

export default function App() {
	// useEffect() to get the log in status

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Sign Up" component={SignUp} />
				<Stack.Screen name="Parrot List" component={ParrotList} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
