import React, { useState } from 'react';
import { TextInput, Button, View, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles';
// import { Headbar } from '../../components/headbar/headbar'
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-community/async-storage';


// might have to change this to just props and use navation const in function. WE SHALL SEE.
const SignIn = (props) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('')
  const [passWord, setPassWord] = useState('')
  const [userType, setUserType] = useState('');
  const [sessionId, setSessionId] = useState('');
  const [userId, setUserId] = useState('');

  const onSignInButtonClicked = () => {
    fetch('http://localhost:3000/api/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {"username": userName, "password": passWord} )
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("returned data", data);
        // data here is: sessionId, userId, username, userType
        if (data.sessionId) {
          setUserType(data.userType);
          setUserId(data.userId);
          setSessionId(data.sessionId);

          // user Id is not being set!! (probably type and session too)
          console.log("id", userId);
          console.log(data.userId)
          AsyncStorage.setItem("userId", data.userId);
          AsyncStorage.setItem("userType", data.userType);
          AsyncStorage.setItem("sessionId", data.sessionId);
          _storeData();

          navigation.navigate('Parrot List');
        // a log in session function called here?

        // there is no data.status ------
      } else if (data.status === 401) {
        alert(data.message)
      }
    })
    .catch((error) => console.error(error));
  };

  const keyPressed = (event) => {
    if (event.key === "Enter") {
      onSignInButtonClicked();
    }
  }

  // store the response, call this function in the onSignInButtonClicked
  // only stores it in Async, if response is good/person logged/once session is started


  // can refactor this to take parameters and then pass in data.userId etc
  const _storeData = async () => {
       try {
         await AsyncStorage.setItem("username", userName);
       } catch (error) {
         console.error(error);
      }
   }

  return (
    <View>
      {/* <Headbar {...props}/> */}
      <View style={styles.inputForm}>
      <TextInput style={styles.inputField}
        autoCapitalize='none'
        placeholder="username"
        type="text"
        onChangeText={(text) => setUserName(text)}
        value={userName}
      />
      <TextInput style={styles.inputField}
        autoCapitalize='none'
        secureTextEntry={true}
        placeholder="password"
        onChangeText={(text) => setPassWord(text)}
        onKeyPress={(key) => keyPressed(key)}
        value={passWord}
      />
      <Button onPress={() => onSignInButtonClicked()}
        title="Sign In"
      />
      <Button style={styles.button}
        onPress={() => navigation.navigate('Sign Up')}
        title="Create an account!"
      />
      </View>
    </View>
  );
};


export { SignIn }
