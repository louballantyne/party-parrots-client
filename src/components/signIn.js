import React, { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import styles from "../../styles";
// import { Headbar } from '../../components/headbar/headbar'
import { useNavigation } from "@react-navigation/core";

// might have to change this to just props and use navation const in function. WE SHALL SEE.
const SignIn = (props) => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");

  const onSignInButtonClicked = () => {
    fetch("http://localhost:3000/api/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: userName, password: passWord }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.sessionId) {
          props.navigation.navigate("Parrot List", {
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
    if (event.key === "Enter") {
      onSignInButtonClicked();
    }
  };

  return (
    <View
      style={[
        styles.body,
        {
          flexDirection: "column",
        },
      ]}
    >
      <View
        style={{
          flex: 3,
          backgroundColor: "#c5e3c7",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Image
          source={require("../images/gify-parrot.gif")}
          style={styles.circleImage}
        />
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: "#c5e3c7",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Text style={styles.title}>Welcome to Parrot Party!</Text>
      </View>
      <View
        style={[
          styles.inputForm,
          {
            flex: 1.2,
            backgroundColor: "#c5e3c7",
            width: "100%",
          },
        ]}
      >
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
      </View>
      <View style={{ flex: 1.5, backgroundColor: "#c5e3c7", width: 500 }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => onSignInButtonClicked()}
        >
          <Text style={styles.text}> Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Sign Up")}
        >
          <Text style={styles.text}> Create an Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { SignIn };
