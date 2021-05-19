import { Dimensions, StyleSheet } from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  applicationContainer: {
    flexDirection: "row",
    margin: 5,
  },
  applicationContent: {
    width: Dimensions.get("window").width * 0.7,
  },
  applicationsContainer: {
    margin: 10,
  },
  approveButton: {
    marginLeft: 10,
  },
  approvedItemContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 10,
    borderRadius: 10,
  },
  body: {
    // navbar #80b383
    //backgroundColor: "#c5e3c7",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "#83ba85",
    margin: 4,
    width: "43%",
  },
  buttonContainer: {
    margin: 20,
    backgroundColor: "#80b383",
    // width: Dimensions.get('window').width * 0.5,
    paddingLeft: 20,
    paddingRight: 20,
    height: 35,
    alignSelf: "center",
    borderRadius: 10,

    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  circleImageContainer: {
    marginTop: 20,
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    alignSelf: "center",
  },
  circleImage: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    borderRadius: Dimensions.get("window").width * 0.6,
    alignSelf: "center",
    justifyContent: "center",
  },
  formBody: {
    // navbar #80b383
    backgroundColor: "#c5e3c7",
    justifyContent: "center",
    alignItems: "center",
  },
  iconImage: {
    flex: 1,
    width: 100,
    height: 100,
    // resizeMode: 'contain',
    // borderRadius: 100,
  },
  iconImageContainer: {
    width: 100,
    height: 100,
    margin: 10,
  },
  infoItem: {
    flexDirection: "row",
    margin: 2,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  infoText: {
    width: "90%",
  },
  inputForm: {
    //margin: 20,
    // backgroundColor: 'pink',
    alignItems: "center",
    width: Dimensions.get("window").width * 0.7,
  },
  inputField: {
    height: 40,
    margin: 12,
    //marginBottom: 12,
    paddingLeft: 5,
    borderWidth: 0,
    backgroundColor: "white",
    width: "50%",
    //borderRadius: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
    //backgroundColor: 'white',
    //margin: 10,
    //borderRadius: 10,
  },
  itemInfoContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  locationMap: {
    width: Dimensions.get("window").width,
    height: 100,
  },
  locationMapContainer: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  mapViewContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapView: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  pageBody: {
    backgroundColor: "#c5e3c7",
  },
  parrotInfo: {
    margin: 10,
  },
  parrotApplications: {
    margin: 5,
  },
  profileImageContainer: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: "center",
  },
  profileImage: {
    flex: 1,
    resizeMode: "contain",
  },
  redBoldFont: {
    color: "red",
    fontWeight: "bold",
  },
  signInButton: {
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "#83ba85",
    margin: 4,
    width: "50%",
  },
  signOutButton: {
    color: "#bf04a3",
    fontSize: 18,
    fontWeight: "bold",
    margin: 10,
  },
  smallButtonContainer: {
    margin: 20,
    backgroundColor: "#80b383",
    // width: Dimensions.get('window').width * 0.5,
    paddingLeft: 10,
    paddingRight: 10,
    height: 35,
    alignSelf: "center",
    borderRadius: 10,
    fontSize: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  smallButtonText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
  text: {
    color: "white",
    fontSize: 15,
    alignSelf: "center",
    justifyContent: "center",
  },
  title: {
    color: "#bf04a3",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
    fontFamily: "AmaticSC_700Bold",
  },
});

export default styles;
