import React, { useState } from 'react';
import { TextInput, Button, View, Image, Alert, Platform, Text, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from '../../styles';
import * as ImagePicker from 'expo-image-picker';
import { ParrotLocationMap } from './parrotLocationMap';
import { GEO_API_KEY } from '@env';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const NewParrot = ({ navigation, route }) => {
	const [image, setImage] = useState(null);
	const [name, setName] = useState();
	const [charity, setCharity] = useState();
	const [species, setSpecies] = useState();
	const [age, setAge] = useState();
	const [location, setLocation] = useState();
	const [gender, setGender] = useState('Unknown');
	const [bio, setBio] = useState();
	const [specialNeeds, setSpecialNeeds] = useState();
	const [imageUrl, setImageUrl] = useState(null);
	const { userId, userType, sessionId } = route.params;
	const [geocode, setGeocode] = useState({
		latitude: 51.507322,
		longitude: -0.127647,
	});
	const radio_list = [
		{ label: 'Unknown   ', value: 'Unknown' },
		{ label: 'Female   ', value: 'Female' },
		{ label: 'Male   ', value: 'Male' },
	];

	const checkMediaPermission = async () => {
		if (Platform.OS !== 'web') {
			const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
			if (status !== 'granted') {
				Alert.alert('Sorry, we need camera roll permissions to make this work!');
			}
		}
	};

	const pickImage = async () => {
		await checkMediaPermission();
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});

		if (!result.cancelled) {
			setImage(result.uri);
			uploadImage(result.uri);
		}
	};

	const uploadImage = (uri) => {
		const uriArray = uri.split('.');
		const fileType = uriArray[uriArray.length - 1];

		const formData = new FormData();
		formData.append('image', {
			uri,
			name: `photo.${fileType}`,
			type: `image/${fileType}`,
		});

		uploadToServer(formData);
	};

	const uploadToServer = async (formData) => {
		try {
			await fetch(`http://localhost:3000/api/uploads`, {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'content-type':
						'multipart/form-data; boundary=---------------------------974767299852498929531610575',
				},
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('data from response: ', data);
					if (data.downloadUrl) {
						console.log('download url: ', data.downloadUrl);
						setImageUrl(data.downloadUrl);
						console.log('image url set: ', imageUrl);
					} else {
						Alert.alert('Error', data);
					}
				})
				.catch((error) => console.log('error: ', error));
		} catch (error) {}
	};

	const onAddButtonClicked = async () => {
		await getLocationGeocode(location);
		await fetch(`http://localhost:3000/api/parrots`, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({
				name: name,
				charity: charity,
				species: species,
				age: age,
				location: location,
				latitude: geocode.latitude,
				longitude: geocode.longitude,
				gender: gender,
				bio: bio,
				specialNeeds: specialNeeds,
				imageUrl: imageUrl ? imageUrl : 'https://party-parrots-s3-bucket.s3.amazonaws.com/parrot.jpeg',
				user: userId,
			}),
		})
			.then((response) => response.json())
			.then((data) => console.log(data))
			.catch((error) => console.log('error: ', error));
		navigation.push('Parrot List', { userType: userType, userId: userId, sessionId: sessionId });
	};

	const getLocationGeocode = (location) => {
		if (location !== undefined) {
			const geoCoderUrlPrefix = `http://open.mapquestapi.com/geocoding/v1/address?key=${GEO_API_KEY}&location=`;
			location = location.replace(/\s/g, '') + ',GB';
			const url = geoCoderUrlPrefix + location;
			fetchGeocode(url);
		}
	};

	const fetchGeocode = async (url) => {
		//console.log('url: ', url);
		const res = await fetch(url, {
			method: 'GET',
		})
			.then((response) => response.json())
			.then((data) => {
				setGeocode({
					latitude: data.results[0].locations[0].latLng.lat,
					longitude: data.results[0].locations[0].latLng.lng,
				});
			});
	};

	return (
		<ScrollView>
			<View style={styles.formBody}>
				<View style={styles.inputForm}>
					<View style={styles.profileImageContainer} onStartShouldSetResponder={() => pickImage()}>
						<Image
							source={{
								uri: image ? image : 'https://party-parrots-s3-bucket.s3.amazonaws.com/parrot.jpeg',
							}}
							style={styles.profileImage}
						/>
					</View>
					<TextInput
						style={styles.inputField}
						placeholder="Name"
						value={name}
						onChangeText={setName}
						autoCapitalize="words"
					/>
					<TextInput
						style={styles.inputField}
						placeholder="Charity"
						value={charity}
						onChangeText={setCharity}
						autoCapitalize="words"
					/>
					<TextInput
						style={styles.inputField}
						placeholder="Species (e.g. Timneh African Grey)"
						value={species}
						onChangeText={setSpecies}
						autoCapitalize="words"
					/>
					<TextInput
						style={styles.inputField}
						placeholder="Age"
						value={age}
						onChangeText={setAge}
						keyboardType="numeric"
					/>
					<TextInput
						style={styles.inputField}
						placeholder="Location"
						value={location}
						onChangeText={setLocation}
						autoCapitalize="words"
					/>
					<Button title="Refresh Map" onPress={() => getLocationGeocode(location)} />
					<Text>Gender</Text>
					<RadioForm
						style={styles.radioForm}
						radio_props={radio_list}
						initial={'Unknown'}
						onPress={(value) => setGender(value)}
						formHorizontal={true}
						buttonColor={'#50C900'}
					/>
					<TextInput
						style={styles.inputField}
						placeholder="All about me..."
						value={bio}
						onChangeText={setBio}
						autoCapitalize="sentences"
						multiline
						numberOfLines={8}
					/>
					<TextInput
						style={styles.inputField}
						placeholder="Does this bird have special needs? If so, please provide details."
						value={specialNeeds}
						onChangeText={setSpecialNeeds}
						autoCapitalize="sentences"
					/>
					<Button title="Add parrot" onPress={() => onAddButtonClicked()} />
					<Text>{'Latitude: ' + geocode.latitude + ' Longitude: ' + geocode.longitude}</Text>
					<ParrotLocationMap geocode={geocode} />
				</View>
			</View>
		</ScrollView>
	);
};

export { NewParrot };
