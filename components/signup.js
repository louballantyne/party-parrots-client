import React from "react";
import { StyleSheet, TextInput, Button, SafeAreaView, View } from "react-native";

const SignUp = () => {
  const [text, onChangeText] = React.useState();

  return (
    <View>
      <TextInput
      style = {styles.input}
      placeholder = "First Name"
      keyboardType = "default"
      onChangeText = {onChangeText}
      />
      <Button
      title = "Sign Up"
      onPress = {() => console.log('Sign Up Button Pressed')}
      />
    </View>
  );
};

const styles =  StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default SignUp;
