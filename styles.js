import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	inputForm: {
		margin: 20,
		// backgroundColor: 'pink',
	},
	inputField: {
		height: 40,
		margin: 12,
		paddingLeft: 5,
		borderWidth: 1,
		backgroundColor: 'white',
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
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
	header: {
		alignSelf: 'stretch',
		height: 52,
		flexDirection: 'row', // row
		backgroundColor: '#179aff',
		alignItems: 'flex-end',
		justifyContent: 'space-between', // center, space-around
		paddingLeft: 10,
		paddingRight: 10,
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
});

export default styles;
