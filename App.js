import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ParrotList } from "./src/components/parrotList";
import { SignUp } from "./src/components/signup";
import { ParrotPage } from "./src/components/parrotPage";
import { SignIn } from "./src/components/signIn";
import { NewParrot } from "./src/components/newParrot";
import { ParrotsMapView } from "./src/components/parrotsMapView";
import { useFonts, AmaticSC_700Bold } from "@expo-google-fonts/amatic-sc";
import AppLoading from "expo-app-loading";

const Stack = createStackNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    AmaticSC_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 30,
            },
          }}
        />
        <Stack.Screen
          name="Sign Up"
          component={SignUp}
          options={{
            title: "Sign Up",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
            headerTitleStyle: {
              fontSize: 20,
            },
          }}
        />
        <Stack.Screen
          name="Parrot List"
          component={ParrotList}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
          }} // no title for Parrot list page
        />
        <Stack.Screen
          name="Parrot Page"
          component={ParrotPage}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
          }}
        />
        <Stack.Screen
          name="Add Parrot"
          component={NewParrot}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
          }}
        />
        <Stack.Screen
          name="Map View"
          component={ParrotsMapView}
          options={{
            title: "Parrot Locations",
            headerStyle: {
              backgroundColor: "#c5e3c7",
            },
            headerTintColor: "#bf04a3",
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 20,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
