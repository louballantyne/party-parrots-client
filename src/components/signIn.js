import React, { useState } from 'react';
import { TextInput, Button, View, TouchableOpacity, Text } from 'react-native';
import styles from '../../styles';
// import { Headbar } from '../../components/headbar/headbar'
import { useNavigation } from '@react-navigation/core';

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

          navigation.navigate('Parrot List',
            {userName: userName,
            userType: data.userType,
            userId: data.userId});
        // a log in session function called here?

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
