import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body: {
    // navbar #80b383
    //backgroundColor: "#c5e3c7",
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
  },
  inputForm: {
    //margin: 20,
    // backgroundColor: 'pink',
    alignItems: "center",
  },
  inputField: {
    height: 40,
    margin: 12,
    paddingLeft: 5,
    borderWidth: 0,
    backgroundColor: "white",
    width: "50%",
  },
  itemContainer: {
    flex: 1,
    flexDirection: "row",
  },
  itemInfoContainer: {
    flexDirection: "column",
    marginTop: 10,
  },
  dropDown: {
    width: 100,
    height: 100,
    margin: 5,
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
  header: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row", // row
    backgroundColor: "#179aff",
    alignItems: "flex-end",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
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
  iconImageContainer: {
    width: 100,
    height: 100,
    margin: 10,
  },
  iconImage: {
    flex: 1,
    width: 100,
    height: 100,
    // resizeMode: 'contain',
    // borderRadius: 100,
  },
  parrotInfo: {
    margin: 10,
  },
  parrotApplications: {
    margin: 5,
  },
  infoItem: {
    flexDirection: "row",
    margin: 2,
  },
  infoLabel: {
    fontWeight: "bold",
  },
  applicationsContainer: {
    margin: 10,
  },
  applicationContainer: {
    flexDirection: "row",
    margin: 5,
  },
  approveButton: {
    marginLeft: 10,
  },
  redBoldFont: {
    color: "red",
    fontWeight: "bold",
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
  locationMapContainer: {
    width: Dimensions.get("window").width,
    height: 100,
    backgroundColor: "#fff",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  locationMap: {
    width: Dimensions.get("window").width,
    height: 100,
  },
  // not using this atm
  // circleImageContainer: {
  //   marginTop: 20,
  //   width: 300,
  //   height: 300,
  //   alignSelf: "center",
  // },

  circleImage: {
    width: 300,
    height: 300,
    borderRadius: 300,
    alignSelf: "center",
    justifyContent: "center",
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
  },

  button: {
    padding: 10,
    borderRadius: 50,
    alignSelf: "center",
    backgroundColor: "#83ba85",
    margin: 4,
    width: "43%",
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
});

export default styles;
