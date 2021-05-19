import React, { useState, useEffect } from "react";
import { View, FlatList, Button, SafeAreaView, Alert } from "react-native";
import Parrot from "./parrotItem";
import styles from "../../styles";

const ParrotList = ({ navigation, route }) => {
  const [parrots, setParrots] = useState([]);
  const { userType, userId, sessionId } = route.params;

  useEffect(() => {
    const fetchParrots = async () => {
      console.log("fetch data in use effect");
      const res = await fetch(`http://localhost:3000/api/parrots`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          setParrots(data);
          // console.log(data);
        });
    };
    fetchParrots();
  }, []);

  const onSignOutButtonClicked = async () => {
    console.log(
      "sign out: ",
      `http://localhost:3000/api/sessions/${sessionId}`
    );
    await fetch(`http://localhost:3000/api/sessions/${sessionId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        Alert.alert(data.message);
        if (data.message === "Successfully Logged Out")
          navigation.navigate("Sign In");
      })
      .catch((error) => console.error(error));
  };

  return (
    <View style = {styles.body}>
      <View style={styles.list}>
        {userType === "admin" && (
          <Button
            title="Add Parrot"
            onPress={() =>
              navigation.navigate("Add Parrot", { userId, userId })
            }
          />
        )}
        {userType !== "admin" && (
          <Button
            style = {styles.list}
            title="Map View"
            onPress={() =>
              navigation.navigate("Map View", {
                userType: userType,
                userId,
                userId,
              })
            }
          />
        )}
        <Button
          title="Sign Out"
          style = {styles.list}
          onPress={() => onSignOutButtonClicked()} />
      </View>
      <FlatList
        style = {styles.list}
        data={parrots}
        renderItem={({ item }) =>
          (userType !== "admin" || userId === item.user) && (
            <Parrot
              style = {styles.list}
              key={item._id}
              parrotId={item._id}
              name={item.name}
              location={item.location}
              age={item.age}
              gender={item.gender}
              imgUrl={
                item.imageUrl
                  ? item.imageUrl
                  : "https://party-parrots-s3-bucket.s3.amazonaws.com/parrot.jpeg"
              }
              navigation={navigation}
              userType={userType}
              userId={userId}
            />
          )
        }
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export { ParrotList };
