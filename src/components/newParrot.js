import React, {useState } from 'react';
import { TextInput, Button, View, Picker } from 'react-native';
import styles from '../../styles';
import AsyncStorage from '@react-native-community/async-storage';

const NewParrot = ({ navigation }) => {
  const [name, setName] = useState();
  const [charity, setCharity] = useState();
  const [species, setSpecies] = useState();
  const [age, setAge] = useState();
  const [location, setLocation] = useState();
  const [gender, setGender] = useState();
  const [bio, setBio] = useState();
  const [specialNeeds, setSpecialNeeds] = useState();
  //const [imageUrl, setImageUrl] = useState();
  //const [user, setUser] = useState();

  // these variables aren't accessible outside the function
  const _getData =  async () => {
		try {
			let username = await AsyncStorage.getItem("username");
			var userId = await AsyncStorage.getItem("userId");
			let sessionId = await AsyncStorage.getItem("sessionId");
			let userType = await AsyncStorage.getItem("userId");
			console.log(userId)

		} catch (error) {
			console.log("Something went wrong", error);
		}
	}

  _getData();

  const onAddButtonClicked = async () => {

    // For some reason I'm having to declare the userId here or it doesn't know what it is!!!
    let userId = await AsyncStorage.getItem("userId");

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
        gender: gender,
        bio: bio,
        specialNeeds: specialNeeds,
        imageUrl: "https://t4.ftcdn.net/jpg/00/66/61/51/240_F_66615178_v1EWRCzXzCDQINyCexTFDzRmY0bRKpY5.jpg",
        user: userId,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log('error: ', error));
      navigation.navigate('Parrot List');
  };

  return (
    <View style={styles.inputForm}>
      <TextInput
        style={styles.inputField}
        placeholder = "Name"
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
      <Picker
        style={styles.dropDown}
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
        <Picker.Item label="Gender" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Unknown" value="Unknown" />
      </Picker>
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
    </View>
  );
};

export { NewParrot };
