import { Dimensions, StyleSheet } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
	formBody: {
		// navbar #80b383
		backgroundColor: '#c5e3c7',
		justifyContent: 'center',
		alignItems: 'center',
	},
	pageBody: {
		backgroundColor: '#c5e3c7',
	},
	inputForm: {
		margin: 20,
		width: Dimensions.get('window').width * 0.7,
	},
	inputField: {
		height: 40,
		marginTop: 12,
		marginBottom: 12,
		paddingLeft: 5,
		borderWidth: 0,
		backgroundColor: 'white',
		borderRadius: 10,
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10,
	},
	approvedItemContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		margin: 10,
		borderRadius: 10,
	},
	itemInfoContainer: {
		flexDirection: 'column',
		marginTop: 10,
	},
	dropDown: {
		width: 100,
		height: 100,
		margin: 5,
		flex: 1,
		paddingTop: 40,
		alignItems: 'center',
	},
	profileImageContainer: {
		width: 100,
		height: 100,
		marginTop: 10,
		marginBottom: 10,
		alignSelf: 'center',
	},
	profileImage: {
		flex: 1,
		resizeMode: 'contain',
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
		flexDirection: 'row',
		margin: 2,
	},
	infoLabel: {
		fontWeight: 'bold',
	},
	applicationsContainer: {
		margin: 10,
	},
	applicationContainer: {
		flexDirection: 'row',
		margin: 5,
	},
	applicationContent: {
		width: Dimensions.get('window').width * 0.7,
	},
	approveButton: {
		marginLeft: 10,
	},
	redBoldFont: {
		color: 'red',
		fontWeight: 'bold',
	},
	mapViewContainer: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	mapView: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
	locationMapContainer: {
		width: Dimensions.get('window').width,
		height: 100,
		backgroundColor: '#fff',
		alignSelf: 'center',
		alignItems: 'center',
		justifyContent: 'center',
	},
	locationMap: {
		width: Dimensions.get('window').width,
		height: 100,
	},
	circleImageContainer: {
		marginTop: 20,
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		alignSelf: 'center',
	},
	circleImage: {
		width: Dimensions.get('window').width * 0.7,
		height: Dimensions.get('window').width * 0.7,
		borderRadius: Dimensions.get('window').width * 0.7,
	},
	buttonContainer: {
		margin: 20,
		backgroundColor: '#80b383',
		// width: Dimensions.get('window').width * 0.5,
		paddingLeft: 20,
		paddingRight: 20,
		height: 35,
		alignSelf: 'center',
		borderRadius: 10,

		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: 'white',
		fontSize: 14,
		fontWeight: 'bold',
	},
	smallButtonContainer: {
		margin: 20,
		backgroundColor: '#80b383',
		// width: Dimensions.get('window').width * 0.5,
		paddingLeft: 10,
		paddingRight: 10,
		height: 35,
		alignSelf: 'center',
		borderRadius: 10,
		fontSize: 6,
		alignItems: 'center',
		justifyContent: 'center',
	},
	smallButtonText: {
		color: 'white',
		fontSize: 10,
		fontWeight: 'bold',
	},
});

export default styles;
