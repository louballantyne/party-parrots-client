import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	inputForm: {
		margin: 20,
		backgroundColor: 'pink',
	},
	inputField: {
		height: 40,
		margin: 12,
		borderWidth: 1,
	},
	itemContainer: {
		flex: 1,
		flexDirection: 'row',
	},
	itemImage: {
		width: 100,
		height: 100,
		margin: 5,
	},
	dropDown: {
		width: 100,
		height:100,
		margin: 5,
		flex: 1,
    paddingTop: 40,
    alignItems: "center",
	},
	header: {
    alignSelf: 'stretch',
    height: 52,
    flexDirection: 'row', // row
    backgroundColor: '#179aff',
    alignItems: 'flex-end',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
    paddingRight: 10
  },
});

export default styles;
